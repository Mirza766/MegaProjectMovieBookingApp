import {takeLatest,call,put} from 'redux-saga/effects'
import { GET_PRODUCT_DATA,SET_PRODUCT_DATA } from './ProductConstants'

function *getProducts(){
const response=yield call(fetch,"http://localhost:4000/movie")
const payload=yield response.json();
console.warn('All Products', payload);
yield put({type:SET_PRODUCT_DATA,payload});
}

function *productSaga(){
yield takeLatest(GET_PRODUCT_DATA,getProducts)
}


export default productSaga
