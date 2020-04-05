import React,{ Component } from 'react';
import './Item.css';

class Item extends Component {


  render() {
    
    const { id,title,onClick } = this.props;
    return (
        <div onClick={onClick} className = "item">
            {title}
        </div>
    )    

};

}


export default Item;