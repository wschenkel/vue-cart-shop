import {
    FILTERED_SUCCESS,
    PRODUCT_CART_UPDATE_SUCCESS
} from './mutation-types'

export default {
    [FILTERED_SUCCESS] (state, payload) {
        state.listProducts = payload
    },
    [PRODUCT_CART_UPDATE_SUCCESS] (state, payload) {
        state.listProductsCart = payload
    }
}