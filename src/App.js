import React, { Component } from 'react';
import Heading from './components/Heading'
import List from './components/list/List'
import NewItem from './components/list/NewItem'
import './App.css';

class App extends Component {

  state = {
    list: [],
    counter: 1
  }

  addItem = itemBody => {
    const newItem = {
      body: itemBody,
      id: this.state.counter
    }

    const copyState = { ...this.state }

    copyState.list.push(newItem)
    copyState.counter += 1
    this.setState(copyState)
  }

  deleteItem = itemId => {
    const copyState = { ...this.state }
    copyState.list = this.state.list.filter(item => item.id != itemId)
    this.setState(copyState)
  }

  updateItem = (itemId, itemBody) => {
    const copyState = { ...this.state }
    copyState.list = this.state.list.map(item => {
      if(itemId === item.id){
        item.body = itemBody
      }
      return item
    })
    this.setState(copyState)
  }

  render(){
    console.log(this.state.list)
    return (
      <div className="App">
        <Heading/>
        <List items={this.state.list} remveItem={this.deleteItem} changeItem={this.updateItem} />
        <NewItem addNewItem={this.addItem} />
      </div>
    );
  }
} 

export default App;
