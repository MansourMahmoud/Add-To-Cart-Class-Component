import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsCart4 } from "react-icons/bs";
import FormattedNumbers from "../helpers/FormattedNumbers";

class Navbary extends Component {
  state = {
    arrayCount: [],
  };

  countStyle = () => {
    let cauchArry = this.state.arrayCount;

    let value = this.props.data
      .map((mapy) => mapy.count)
      .reduce((c, s) => c + s);

    console.log(value);

    // this.setState({arrayCount: })
  };

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="py-3 d-flex flex-column flex-md-row gap-4 justify-content-start align-items-start align-items-md-center ps-3 ps-md:0">
            <Navbar.Brand href="#home" className="fs-3 mb-md-3 mb-lg-0">
              متجر منصور
            </Navbar.Brand>
            <Navbar.Collapse className="d-flex w-100 justify-content-center flex-wrap gap-3">
              {this.props.datas.map((data, length) => (
                <Nav key={length}>
                  <Button
                    className="ms-3"
                    key={length}
                    variant="success"
                    onClick={() => {
                      this.props.btnsNav(data);
                    }}
                  >
                    {data.name}
                  </Button>
                </Nav>
              ))}
            </Navbar.Collapse>
            <Nav
              style={{ position: "relative" }}
              className="d-flex flex-row bg-light gap-1 align-items-center p-2 rounded mt-3 mt-sm-0 me-3 me-md:0"
            >
              <span>
                <BsCart4 className="text-light fs-3 text-dark" />
              </span>
              <span
                className={`${
                  this.props.products.every((data) => data.count === 0)
                    ? "text-danger fs-4"
                    : "text-success fs-4"
                }
                    fw-bold rounded-circle bg-dark
                    `}
                style={{
                  position: "absolute",
                  top: "-25px",
                  right: "-10px",
                  padding: "5px 5px 0px 7px",
                }}
              >
                <FormattedNumbers
                  number={
                    this.props.products.length > 0
                      ? this.props.products
                          .map((data) => {
                            return data.count;
                          })
                          .reduce((e, x) => e + x)
                      : 0
                  }
                />
              </span>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbary;
