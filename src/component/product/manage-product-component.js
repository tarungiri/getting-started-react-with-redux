import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchProduct,
  saveProduct,
  updateProduct
} from "../../store/actions/actionCreator";
import uuid from "uuid/v4";

class ManageProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      productName: "",
      price: "",
      isSave: false,
      isNew: true
    };
    this.fetchProductForEdit = this.fetchProductForEdit(this);
  }

  fetchProductForEdit() {
    const prodId = this.props.match.params.id;
    if (!!prodId) {
      this.props.fetchProduct(prodId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.product && nextProps.product !== this.props.product) {
      const { id, productName, price } = nextProps.product;
      this.setState({
        id: id,
        productName: productName,
        price: price,
        isSave: false,
        isNew: !id
      });
    }
  }

  save = event => {
    event.preventDefault();
    const { productName, price } = this.state;
    if (!productName | !price) {
      alert("missing required details.");
      return;
    }
    if (this.state.isNew) {
      this.props.saveProduct({
        id: uuid(),
        productName: productName,
        price: price
      });
    } else {
      this.props.updateProduct({
        id: this.state.id,
        productName: this.state.productName,
        price: this.state.price
      });
    }
    this.setState({
      isSave: true,
      isNew: false
    });
  };

  onInputChange = event => {
    const state = this.state;
    state[event.target.id] = event.target.value;
    this.setState({
      state
    });
  };

  render() {
    const { productName, price } = this.state;
    if (this.state.isSave === true) {
      return <Redirect to="/products" />;
    }

    let manageProductHeader = this.state.isNew
      ? "Add New Product"
      : "Edit Product Details";

    let action = this.state.isNew ? "Save" : "Update";

    return (
      <div className="row">
        <h4>{manageProductHeader}</h4>
        <br />
        {this.props.product && (
          <form className="col s6">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="productName"
                  type="text"
                  value={productName}
                  className="validate"
                  ref="productName"
                  onChange={this.onInputChange}
                />
                <label className="active" htmlFor="productName">
                  Product Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="price"
                  type="text"
                  value={price}
                  className="validate"
                  ref="price"
                  onChange={this.onInputChange}
                />
                <label className="active" htmlFor="price">
                  Price
                </label>
              </div>
            </div>
            <a className="waves-effect waves-light btn" onClick={this.save}>
              {action}
            </a>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productOps.product
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProduct,
      saveProduct,
      updateProduct
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  ManageProductComponent
);
