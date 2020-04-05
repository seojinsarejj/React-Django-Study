import React,{ Component } from 'react';
import './List.css';
import Item from '../Item/Item';

class List extends Component {

  render() {
    
    const { memos, onItemClick } = this.props;
    
      return (
        <main className="menu">
            <div className ="listtitle">MEMOLIST</div>
            <div>
                {memos.map((item) => {
                    const {id, title } = item;
                    return (
                        <Item
                            id={id}
                            title={title}
                            onClick={() => onItemClick(id)}
                            />
                    )
                })}
            
            </div>
        </main>
      );
  
  
};

}


export default List;