import React,{ Component } from 'react';
import Template from './components/Template/Template'
import List from './components/List/List'
import axios from 'axios';

class App extends Component {


  state = {
    memos : [],
    nowid : null,
  };

  async componentDidMount() {
    try {
    const res = await fetch('http://127.0.0.1:8000/memo/');
    const memos = await res.json();
    this.setState({
        memos
    });
    }catch (e) {
    console.log(e)
    }   
  }

  handleItemClick = (id) => {
    this.setState({nowid:id})
  }



  render() {
    return (

      <div>
      <Template/>
      <List 
        memos = {this.state.memos}
        nowid={this.state.nowid}
        onItemClick = {this.handleItemClick}/>
      </div>    
    );
  }

}


export default App;



