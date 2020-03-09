import React, { Component } from 'react';
import './NewItem.css';

class NewItem extends Component {

    state = {
        item: ""
    }

    onChangeHandler = e => {
        const value = e.target.value
        const copyState = { ...this.state }
        copyState.item = value
        this.setState(copyState)
    }

    onSubmitHandler = e => {
        e.preventDefault()
        this.props.addNewItem(this.state.item)
        const copyState = { ...this.state }
        copyState.item = ""
        this.setState(copyState)
    } 

    render() {
        return (
            <form className="form" onSubmit={this.onSubmitHandler}>
                <input className="blank" placeholder = {"اضافة عمل"}onChange={this.onChangeHandler} value={this.state.item} />
                <input className="sub-btn" type="submit" value="تم"/>
            </form>
        )
    }
}

export default NewItem;
