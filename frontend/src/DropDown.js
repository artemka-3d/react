import React from "react";
import SecondDropDown from "./SecondDropDown";

class DropDown extends React.Component {
  state = {
    isOpen: false
  };

  toggleDropDown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <>
        <h2 onClick={this.toggleDropDown}>Click me please (✿◠‿◠)</h2>
        {this.state.isOpen && <SecondDropDown />}
      </>
    );
  }
}

export default DropDown;
