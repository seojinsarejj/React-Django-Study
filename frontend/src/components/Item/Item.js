import React,{ Component } from 'react';
import './Item.css';

class Item extends Component {


  render() {
    
    const { id,nowid,title,onClick } = this.props;
    return (
        <div onClick={onClick} className = { nowid===id ? "nowitem":"item"}>
            {title}
        </div>
    )    

};

}


export default Item;