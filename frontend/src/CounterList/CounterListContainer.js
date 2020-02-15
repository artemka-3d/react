import React from "react";
import CounterListView from "./CounterListView";

class CounterListContainer extends React.Component {
  state = {
    number: 0,
    isAdded: null
  };

  increase = () => {
    this.setState({
      number: this.state.number + 1,
      isAdded: true
    });
  };

  remove = () => {
    this.setState({
      number: this.state.number - 1,
      isAdded: false
    });
  };

  render() {
    return (
      <CounterListView
        number={this.state.number}
        increase={this.increase}
        remove={this.remove}
        isAdded={this.state.isAdded}
      />
    );
  }
}

export default CounterListContainer;
