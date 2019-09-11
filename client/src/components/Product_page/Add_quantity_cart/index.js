import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
import swal from "sweetalert";

class AddQuantityCart extends Component {
  state = {
    quantity: 1
  }

  addToCart = () => {
    const productInfo = {
      productID: this.props.id,
      quantity: this.state.quantity,
      price: this.props.price
    }
    axios
      .post('/add-to-cart', productInfo)
      .then(response => {
        console.log(response, 'done, added to cart')
      })
      .catch(error => {
        console.log(error, 'components/Product_page/Add_quantity_cart')
      })
      swal({
        title: "added to cart",
        icon: "success",
        button: "Continue shoping",
      }).then(function() {
        window.location.href = `/${this.props}`;
      });
    }
    
    render() {
      console.log(this.props)
      return (
      <div className="continer">
        <button className="add-to-cart" onClick={this.addToCart}>
          Add to cart
        </button>
        <div className="quantity-controler">
          <button
            className="increase"
            onClick={() => {
              this.setState({ quantity: this.state.quantity + 1 })
            }}
          ></button>
          <h2 className="quantity">{this.state.quantity}</h2>
          <button
            className="decrease"
            onClick={() => {
              this.setState({
                quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1
              })
            }}
          ></button>
        </div>
      </div>
    )
  }
}

export default AddQuantityCart
