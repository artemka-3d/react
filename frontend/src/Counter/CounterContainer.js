import React from "react";
import Counter from "./Counter";
class CounterContainer extends React.PureComponent {
  state = {
    number: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAdded && this.state.number === 0) {
      this.decrease();
    }
    if (!nextProps.isAdded && this.state.number !== 0) {
      this.increase();
    }
  }

  componentDidUpdate() {
    //   if (this.PaymentResponse.isAdded && this.state.number % 2 === 0) {
    //     this.setState({
    //       number: this.state.number -1
    //     });
    //   }
    // }
  }

  increase = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  decrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <>
        <Counter
          number={this.state.number}
          increase={this.increase}
          decrease={this.decrease}
        />
      </>
    );
  }
}

export default CounterContainer;
