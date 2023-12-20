import React, { Component } from "react";
import Navbary from "./component/Navbary";
import "bootstrap/dist/css/bootstrap.min.css";
import TextShopping from "./component/TextShopping";
import ControlBar from "./component/ControlBar";
import Products from "./component/Products";
import "./index.css";

class App extends Component {
  state = {
    datas: [
      { id: 0, name: "شبسي", count: 1, price: 8 },
      { id: 1, name: "بيبسي", count: 1, price: 5 },
      { id: 2, name: "مولتو", count: 1, price: 3 },
      { id: 3, name: "كرانشي", count: 1, price: 10 },
      { id: 4, name: "سجائر", count: 1, price: 30 },
    ],
    bg: true,
    defultCount: 1,
    products: [
      { id: 0, name: "شبسي", count: 1, price: 8 },
      { id: 1, name: "بيبسي", count: 1, price: 5 },
      { id: 2, name: "مولتو", count: 1, price: 3 },
      { id: 3, name: "كرانشي", count: 1, price: 10 },
      { id: 4, name: "سجائر", count: 1, price: 30 },
    ],
  };

  // Function for Dark Mode
  toggleDarkMode = () => {
    //clone
    let mode = this.state.bg;

    //setState
    this.setState({ bg: !mode });
  };

  // Function for Button Reset
  reset = () => {
    //clone
    const newDatas = [
      { id: 0, name: "شبسي", count: 1, price: 8 },
      { id: 1, name: "بيبسي", count: 1, price: 5 },
      { id: 2, name: "مولتو", count: 1, price: 3 },
      { id: 3, name: "كرانشي", count: 1, price: 10 },
      { id: 4, name: "سجائر", count: 1, price: 30 },
    ];

    //setState
    this.setState({ products: newDatas });
  };

  // Function for Buttons Navbar Products
  btnsNav = (product) => {
    //clone
    let pro = this.state.products;
    let search = pro.filter((result) => result.name === product.name);

    //update
    if (search.length > 0) {
      search[0].count++;
    } else {
      pro.push(product);
    }

    //setState
    this.setState({ products: pro });
  };

  // Function for Button Empty
  empty = () => {
    //setState
    this.setState({ products: [] });
  };

  // Function for Button Delete
  delete = (btn) => {
    //clone
    let products = this.state.products.slice();
    let conuto = this.state.defultCount;
    let selectedProduct = products[btn];

    //update
    products.splice(btn, 1);
    selectedProduct.count = conuto;

    //setState
    this.setState({ products: products });
  };

  // Function for Button Decrement (-)
  decrement = (pro) => {
    //clone
    let products = this.state.products;

    //update
    let count = products.map((obj) => {
      obj === pro && pro.count > 1 && obj.count--;
      return obj;
    });

    //setState
    this.setState({ products: count });
  };

  // Function for Button Iecrement (+)
  increment = (pro) => {
    //clone
    let products = this.state.products;

    //update
    let count = products.map((obj) => {
      obj === pro && pro.count >= 1 && obj.count++;
      return obj;
    });

    //setState
    this.setState({ products: count });
  };

  render() {
    return (
      <div
        dir="rtl"
        className={
          this.state.bg === false
            ? (document.body.style.background = "#222")
            : (document.body.style.background = "#fff")
        }
      >
        <Navbary
          btnsNav={this.btnsNav}
          datas={this.state.datas}
          products={this.state.products}
        />
        <TextShopping />
        <ControlBar
          toggleDarkMode={this.toggleDarkMode}
          bg={this.state.bg}
          empty={this.empty}
          reset={this.reset}
        />
        <Products
          bg={this.state.bg}
          delete={this.delete}
          decrement={this.decrement}
          increment={this.increment}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default App;
