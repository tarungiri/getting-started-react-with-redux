import * as actionTypes from "../actions/actions";

const initialState = {
  products: [],
  product: {}
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      };
    }
    case actionTypes.FETCH_PRODUCT_BY_ID: {
      return {
        ...state,
        product: action.payload
      };
    }
    case actionTypes.ADD_PRODUCT: {
      return state;
    }
    case actionTypes.UPDATE_PRODUCT: {
      return state;
    }
    case actionTypes.DELETE_PRODUCT: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default productReducers;
