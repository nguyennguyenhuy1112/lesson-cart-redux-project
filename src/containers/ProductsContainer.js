import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types'; //import PropTypes
import {actAddToCart, actChangeMessage} from './../actions/index';


class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        var result = null;
        var {onAddToCart,onChangeMessage} = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                    key={index}
                    product={product}// chuyền vào 1 props là product để vào trong product component 
                //sẽ lấy props ra và hiển thị (truyền vào thằng con)
                    onAddToCart ={onAddToCart}
                    onChangeMessage = {onChangeMessage}
                />
            });
        }
        return result;
    }
}

//kiểm tra các props mà component này nhận vào
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })//trong đây sẽ kiểm tra từng cái thuộc tính của product
    ).isRequired, //product này phải nhận vào 1 cái array
    // isRequired tức là yêu cầu phải có 
    onChangeMessage : PropTypes.func.isRequired,
    onAddToCart : PropTypes.func.isRequired
}

//chuyển các state trên các store thành các props của component này
const mapStateToProps = state => {
    return {
        products: state.products //gọi lên trên store lấy các state chuyển nó thành props của state này
        //state.products : products đây là một trong những reducer tạo ở index.js                        
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        onAddToCart : (product) => {
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage :(message)=>{
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
