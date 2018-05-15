import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductRow from "./product-component";
import {
  fetchProducts,
  deleteProduct
} from "../../store/actions/actionCreator";

class ProdutListComponent extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProducts();
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    const prodId = id;
    this.props.deleteProduct(prodId);
  }

  render() {
    let rows = this.props.allProducts.map(product => {
      return (
        <ProductRow
          key={product.id}
          data={product}
          deleteProduct={this.delete}
        />
      );
    });

    return (
      <div>
        <div>
          <h3>Product List</h3>
          <Link to="/products/add" className="waves-effect waves-light btn">
            Add New Product
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  allProducts: state.productOps.products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts,
      deleteProduct
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  ProdutListComponent
);
