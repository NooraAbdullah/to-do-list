import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 0
    }

    addOne = () => {
        // console.log("Hello From addOne")
        const copyState = { ...this.state }
        copyState.counter += 1
        this.setState(copyState)
    }

    render() {
        return (
            <div className="Counter">
               <h4> {this.state.counter} </h4>
               <button onClick={ this.addOne }>Add One</button>
            </div>
        )
    }
}

export default Counter

