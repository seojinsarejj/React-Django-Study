import React,{ Component } from 'react';
import Template from './components/Template/Template'
import List from './components/List/List'

class App extends Component {


  state = {
    memos : []
  };

  async componentDidMount() {
    try {
    const res = await fetch('http://127.0.0.1:8000/memo/');
    const memos = await res.json();
    this.setState({
        memos
    });
    console.log(memos.id);
    }catch (e) {
    console.log(e)
    }   
  }



  render() {
    return (

      <div>
      <Template/>
      <List/>  
      </div>    
  
    );
  }

}


export default App;



