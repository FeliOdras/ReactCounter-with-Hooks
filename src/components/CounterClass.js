import React, { Component } from 'react'

export default class CounterClass extends Component {
constructor(props){
    super(props)
    this.state = {
        myCounter: 0
    }
}
  render() {
    return (
      <div>
        <p>You clicked {this.state.myCounter}</p>
        <button onClick={
        () => this.setState(
            prevState=>({ myCounter: prevState.myCounter + 1})
        )
        }>Click me please</button>
      </div>
    )
  }
}
