import React, { Component } from 'react'
import './List.css'


class Item extends Component {
    state = {
        visable: false,
        body: this.props.body
    }

    onContextMenuHandler = () => {
        const copyState = {...this.state}
        copyState.visable = true
        this.setState(copyState)
    }
    onChangeHandler = e => {
        const value = e.target.value
        const copyState = { ...this.state }
        copyState.body = value
        this.setState(copyState)
    }

    onSubmitHandler = e => {
        e.preventDefault()
        this.props.updated(this.props.id, this.state.body)
        const copyState = { ...this.state }
        copyState.visable = false
        this.setState(copyState)
    }

    render() {
        // console.log(this.props)
        const content = this.state.visable ? <form 
            onSubmit={this.onSubmitHandler}>
            <input onChange={this.onChangeHandler} value={this.state.body} />
            <input type="submit" />  
        </form>
             : <p className = "item"
            onClick={() => this.props.removed(this.props.id)}
            onContextMenu={this.onContextMenuHandler}
        >
            {this.props.body}
        </p>
        return content 
    }
}


export default Item