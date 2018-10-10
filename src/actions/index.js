import * as Types from './../constants/ActionType';
//quantity la so luong hang se mua
export const actAddToCart =(product, quantity)=>{
    return{
        type: Types.ADD_TO_CART,
        product, //product : product
        quantity, //quantity: quantity
    }
}

export const actChangeMessage =(message) =>{
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart =(product)=>{
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart = (product, quantity)=>{
    return {
        type : Types.UPDATE_PRODUCT_INCART,
        product,
        quantity
    }
}