import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Gọi hàm constructor");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //Chỉ render khi count chẵn
    console.log("Gọi hàm shouldComponentUpdate", nextProps, nextState);
    return nextState.count % 2 === 0;
  }

  componentDidMount() {
    console.log("Gọi hàm componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Gọi hàm componentDidUpdate: ", prevProps, " : ", prevState);
  }

  componentWillUnmount() {
    console.log("Gọi hàm componentWillUnmount");
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Gọi hàm render");
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
