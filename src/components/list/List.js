import React from 'react'
import Item from './Item'
import './List.css'


const List = props => (
    <div className="List">
        { props.items.map(item => (
            <Item body={item.body} key={item.id} id={item.id} removed={props.remveItem}
                updated={props.changeItem}
            />
        )) } 
    </div>
)


export default List