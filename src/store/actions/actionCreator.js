import * as actionTypes from "./actions";
import productAPI from "../../api/products-data";

export const fetchProducts = () => dispatch => {
  const allProducts = productAPI().getAllProducts;
  dispatch({
    type: actionTypes.FETCH_PRODUCTS,
    payload: allProducts
  });
};

export const fetchProduct = pid => dispatch => {
  debugger;
  const product = productAPI().getProductById(pid);
  dispatch({
    type: actionTypes.FETCH_PRODUCT_BY_ID,
    payload: product
  });
};

export const saveProduct = product => dispatch => {
  productAPI().saveProduct(product);
  dispatch({
    type: actionTypes.ADD_PRODUCT
  });
};

export const updateProduct = product => dispatch => {
  productAPI().updateProduct(product);
  dispatch({
    type: actionTypes.UPDATE_PRODUCT
  });
};

export const deleteProduct = pid => dispatch => {
  productAPI().deleteProduct(pid);
  dispatch({
    type: actionTypes.DELETE_PRODUCT
  });
};
