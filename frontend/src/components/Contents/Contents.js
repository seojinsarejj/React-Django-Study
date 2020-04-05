import React,{ Component } from 'react';
import './Contents.css'

class Contents extends Component {

    

  render() {

    const { memos,nowid } = this.props;
    const memo = memos.filter((item) => item.id === nowid)[0]
    const {title,contents} = memo;
    return (

        <div>
            <h1>{title}</h1>
            <h2>{contents}</h2>
        </div>
        
      
    );
  }

}


export default Contents;



