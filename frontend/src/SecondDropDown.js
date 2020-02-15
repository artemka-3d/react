import React from "react";

class SecondDropDown extends React.Component {
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
        <h2 onClick={this.toggleDropDown}>abc</h2>
        {this.state.isOpen && <h2>der</h2>}
      </>
    );
  }
}

export default SecondDropDown;
