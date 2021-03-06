import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; //import PropTypes
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions/index';



class CartContainer extends Component {
    render() {
        var {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var result =<tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        var {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} =this.props;
        if(cart.length >0){//cart nay lay tren store
            result = cart.map((item,index)=>{
                return(
                    <CartItem
                        key ={index}
                        item = {item} //phan tu de xacc dinh duoc tung phan tu trong gio hang
                        index = {index} //
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onChangeMessage ={onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart ={cart}/>
        }
        return result;
    }

}

//kiểm tra các props mà component này nhận vào
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id : PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory :PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired,
}



const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps =(dispatch, props)=> {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message)=>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart:(product, quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
