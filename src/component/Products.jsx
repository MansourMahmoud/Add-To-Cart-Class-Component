import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormattedPrice from "../helpers/FormattedPrice";
import FormattedNumbers from "../helpers/FormattedNumbers";

class Products extends Component {
  render() {
    let totalLengthcounts = this.props.products
      .map((data) => data.count)
      .reduce((x, y) => x + y, 0);

    return (
      <div className="d-flex flex-column gap-3">
        {/* products */}
        <div>
          {this.props.products.length > 0 ? (
            this.props.products.map((product, length) => (
              <div
                key={length}
                className="bg-secondary d-flex flex-column gap-2 gap-md-0 flex-md-row justify-content-evenly flex-wrap align-items-center p-2 mt-4"
              >
                {/* poduct name, price and count */}
                <div className="d-flex justify-content-start align-items-center pe-2 pe-md-0 w-product-style">
                  <h1 className="fs-6 fs-sm-5 text-center text-light ms-4 ms-sm-4 ms-md-5">
                    {product.name}
                  </h1>
                  <h1 className="fs-6 fs-sm-5 text-center text-light ms-4 ms-sm-4 ms-md-5">
                    <FormattedPrice amount={product.price} />
                  </h1>
                  <h1
                    style={{ color: product.count > 0 ? "white" : "red" }}
                    className="fs-6 d-flex align-items-center gap-2 fs-sm-5 text-center"
                  >
                    <span className="text-info fw-bold">عدد : </span>
                    <span className="fs-5">
                      <FormattedNumbers number={product.count} />
                    </span>
                  </h1>
                </div>

                <div className="d-flex gap-4 ps-4 gap-md-0 ps-md-0 justify-content-end justify-content-md-between align-items-center half-w w-product-style">
                  {/* btns contral of product */}
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="success"
                      onClick={() => {
                        this.props.increment(product);
                      }}
                      className="ms-4 ms-sm-4 ms-md-5"
                    >
                      +
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => {
                        this.props.decrement(product);
                      }}
                      className="ms-4 ms-sm-4 ms-md-5"
                    >
                      -
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        this.props.delete(length);
                      }}
                      className=""
                    >
                      حذف
                    </Button>
                  </div>
                  {/* end */}

                  {/* total price of product */}
                  <div>
                    <h1
                      className={`fs-6 fs-sm-5 text-center ${
                        product.count === 1 ? "text-light" : "text-info fw-bold"
                      }`}
                    >
                      إجمالي :{" "}
                      {product.count > 0 ? (
                        <FormattedPrice
                          amount={product.price * product.count}
                        />
                      ) : (
                        <span
                          style={{ color: product.count > 0 ? "white" : "red" }}
                        >
                          {<FormattedPrice amount={0} />}
                        </span>
                      )}
                    </h1>
                  </div>
                  {/* end */}
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-danger fw-bold mt-4">Empty</h1>
          )}
        </div>
        {/* end */}

        {/* total price */}
        <div className="mb-4">
          {this.props.products.length > 0 && (
            <div className="text-center">
              <h1
                className={
                  this.props.bg === true ? "text-secondary" : "text-light"
                }
              >
                إجمالي الكل : <span> </span>
                <span
                  className={
                    this.props.products.length === 5 && totalLengthcounts === 5
                      ? this.props.bg === true
                        ? "text-dark"
                        : "text-light"
                      : "text-success"
                  }
                >
                  <FormattedPrice
                    amount={this.props.products
                      .map((data) => data.price * data.count)
                      .reduce((dataOne, dataTow) => dataOne + dataTow)}
                  />
                </span>
              </h1>
            </div>
          )}
        </div>
        {/* end */}
      </div>
    );
  }
}

export default Products;
