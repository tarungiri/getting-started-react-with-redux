import * as actionTypes from "./actions";
import productAPI from "../../api/products-data";

export const fetchProducts = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    payload: productAPI().getAllProducts()
  };
};

// var fetchProduct = function fetchProduct(pid) {
//   return function (dispatch) {
//     var product = Object(__WEBPACK_IMPORTED_MODULE_1__api_products_data__["a" /* default */])().getProductById(pid);
//     dispatch{
//       type: __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* FETCH_PRODUCT_BY_ID */],
//       payload: product
//     });
//   };
// };

export const fetchProduct = pid => {
  return {
    type: actionTypes.FETCH_PRODUCT_BY_ID,
    payload: productAPI().getProductById(pid)
  };
};

export const saveProduct = product => {
  productAPI().saveProduct(product);
  return {
    type: actionTypes.ADD_PRODUCT
  };
};

export const updateProduct = product => {
  productAPI().updateProduct(product);
  return {
    type: actionTypes.UPDATE_PRODUCT
  };
};

export const deleteProduct = pid => {
  productAPI().deleteProduct(pid);

  return {
    type: actionTypes.DELETE_PRODUCT,
    payload: productAPI().getAllProducts()
  };
};
