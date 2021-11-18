import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      cart: [],
      name: "",
      email: "",
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(user) {
    const newCart = [...this.state.cart, user];
    this.setState({ cart: newCart });
  }

  // type cdm for shortcut
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <h2>This is Users: {this.state.users.length}</h2>
        <h3>Cart: {this.state.cart.length}</h3>
        {this.state.users.map((user) => (
          <User
            key={user.id}
            user={user}
            handleAddToCart={this.handleAddToCart}
          ></User>
        ))}
      </div>
    );
  }
}
