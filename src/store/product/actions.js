/*
export function someAction (context) {
}
*/
import $http from 'src/api'
export function getProductDetail (store, params) {
    debugger
    console.log(arguments)
    $http.product.getProduct({ code: params }).then(res => {
        store.commit('setProduct', res.data.product)
    })
}