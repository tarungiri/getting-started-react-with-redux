import uuid from "uuid/v4";

const defaultProducts = [
  {
    id: uuid(),
    productName: "Eclair",
    price: 0.87
  },
  {
    id: uuid(),
    productName: "Jellybean",
    price: 2.5
  },
  {
    id: uuid(),
    productName: "Lollipop",
    price: 3.8
  }
];
let products = defaultProducts;
let productAPI = function() {
  let getAllProducts = () => {
    return products;
  };
  let getProductById = pid => {
    return products.find(element => {
      return element.id === pid;
    });
  };

  let saveProduct = product => {
    products.push(product);
  };

  let updateProduct = product => {
    Object.assign(
      products,
      products.map(el => (el.id === product.id ? product : el))
    );
  };

  let deleteProduct = pid => {
    let foundIndex = products.findIndex(element => element.id === pid);
    products.splice(foundIndex, 1);
  };

  return {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    saveProduct: saveProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
  };
};

export default productAPI;
