import React, { Component } from 'react';
import { incrementCounter, decrementCounter } from '../store/actions/counterActions';
import { connect } from 'react-redux'

class Counter extends Component {
  constructor() {
    super();
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.onClickIncrement = this.onClickIncrement.bind(this);
  }

  onClickDecrement() {
    this.props.decrementCounter();  
  }

  onClickIncrement() {
    this.props.incrementCounter();
  }

  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>

        <button onClick={this.onClickIncrement}>Increment</button> {" "} {" "}
        <button onClick={this.onClickDecrement}>Decrement</button>

        <br/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    count: state.counter.count
  }
}


export default connect(mapStateToProps, { incrementCounter, decrementCounter })(Counter);
