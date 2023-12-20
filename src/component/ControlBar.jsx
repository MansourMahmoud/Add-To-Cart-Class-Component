import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

class ControlBar extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-evenly flex-wrap mt-4">
          <Button
            variant={this.props.bg === true ? "dark" : "light"}
            onClick={this.props.reset}
          >
            Reset
          </Button>
          <Button variant="danger" onClick={this.props.empty}>
            Empty
          </Button>
          <Button
            variant={this.props.bg === true ? "dark" : "light"}
            onClick={this.props.toggleDarkMode}
          >
            {" "}
            {this.props.bg === true ? (
              <MdDarkMode className="text-light fs-4" />
            ) : (
              <BsFillSunFill className="text-dark fs-4" />
            )}{" "}
          </Button>
        </div>
      </>
    );
  }
}

export default ControlBar;
