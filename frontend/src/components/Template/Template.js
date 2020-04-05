import React,{ Component } from 'react';
import './Template.css';

class Template extends Component {

  render() {
    const { onClick } = this.props
    
      return (
        <main className="template">
          <div onClick={onClick} className="title">
            MEMO
          </div>
        </main>
      );
  
  
};

}


export default Template;