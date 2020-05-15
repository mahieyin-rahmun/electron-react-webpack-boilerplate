import React, { Component } from 'react';
import { incrementCounter, decrementCounter, incrementIfOdd, incrementIfEven, incrementAsync } from '../store/actions/counterActions';
import { connect } from 'react-redux'

class Counter extends Component {
  constructor() {
    super();
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickIncrementIfOdd = this.onClickIncrementIfOdd.bind(this);
    this.onClickIncrementIfEven = this.onClickIncrementIfEven.bind(this);
    this.onClickIncrementAsync = this.onClickIncrementAsync.bind(this);
  }

  onClickIncrement() {
    this.props.incrementCounter();
  }

  onClickDecrement() {
    this.props.decrementCounter();
  }

  onClickIncrementIfEven() {
    this.props.incrementIfEven();
  }

  onClickIncrementIfOdd() {
    this.props.incrementIfOdd();
  }

  onClickIncrementAsync() {
    this.props.incrementAsync();
  }


  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>

        <button onClick={this.onClickIncrement}>Increment</button> {" "} {" "}
        <button onClick={this.onClickDecrement}>Decrement</button>

        <br />
        <br />

        {
          this.props.isIncrementing ?
            (
              <p>Incrementing...</p>
            ) : ""
        }

        <button onClick={this.onClickIncrementIfOdd}>Increment if Odd</button> {" "} {" "}
        <button onClick={this.onClickIncrementIfEven}>Increment if Even</button> {" "} {" "}
        <button onClick={this.onClickIncrementAsync}>Async Increment</button>
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    count: state.counter.count,
    isIncrementing: state.notify.isIncrementing
  }
}


export default connect(
  mapStateToProps,
  {
    incrementCounter,
    decrementCounter,
    incrementIfEven,
    incrementIfOdd,
    incrementAsync
  }
)(Counter);
