import {
    FILTERED_SUCCESS,
    PRODUCT_CART_UPDATE_SUCCESS
} from './mutation-types'

export default {
    filterByScore ({commit}, listFilters) {
        listFilters.sort((a, b) => parseFloat(a.score) - parseFloat(b.score)).reverse();
        return commit(FILTERED_SUCCESS, listFilters);
    },
    filterByPrice ({commit}, listFilters) {
        listFilters.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        return commit(FILTERED_SUCCESS, listFilters);
    },
    filterByName ({commit}, listFilters) {
        listFilters.sort((a, b) => (a.name > b.name) - (a.name < b.name));
        return commit(FILTERED_SUCCESS, listFilters);
    },
    updateListProductCard ({commit}, listProductsCart) {
        return commit(PRODUCT_CART_UPDATE_SUCCESS, listProductsCart)        
    }
}
