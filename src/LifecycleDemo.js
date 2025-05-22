import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Gọi hàm constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Gọi hàm getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Gọi hàm componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Gọi hàm shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Gọi hàm componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Gọi hàm componentWillUnmount");
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Gọi hàm  render");
    return (
      <div className="lifecycle-container">
        <h2>React Lifecycle Demo - Task 3</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default LifecycleDemo;
