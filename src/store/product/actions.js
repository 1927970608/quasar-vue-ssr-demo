/*
export function someAction (context) {
}
*/
import $http from 'src/api'
export function getProductDetail (store, params) {
    $http.product.getProduct(params).then(res => {
        store.commit('setProduct', res.data)
    })
}