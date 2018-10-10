import * as Types from './../constants/ActionType'

//load data
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data :[];

const cart = (state = initialState, action) => {
    var {product,quantity} = action;
    var index = -1; // -1 la khong tim thay
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state,product);
            if(index!==-1){
                state[index].quantity+=quantity;
            }else
            {state.push({
                product,
                quantity
            });
        }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_INCART:
            index= findProductInCart(state,product);
            if(index !==-1){
                state[index].quantity=quantity; // quantity nay duoc lay tu action
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if(cart.length >0){
        for(var i=0; i<cart.length;i++){
            if(cart[i].product.id===product.id){
                index =i;
                break;
            }
        }
    }
    return index
}

export default cart;