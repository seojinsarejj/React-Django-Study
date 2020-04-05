import React,{ Component } from 'react';
import Template from './components/Template/Template'
import List from './components/List/List'
import Contents from './components/Contents/Contents'

class App extends Component {


  state = {
    memos : [],
    nowid : 1,
    
  };

  async componentDidMount() {
    try {
    const res = await fetch('http://127.0.0.1:8000/memo/');
    const memos = await res.json();
    this.setState({
        memos
    });
    console.log(memos)
    }catch (e) {
    console.log(e)
    }   
  }

  handleItemClick = (id) => {
    this.setState({nowid:id})
    
  }


  handleHeaderClick =() => {
    this.setState({nowid:1})
  }




  render() {

    const {memos,nowid} = this.state;
    

    return (

      <div>
      <Template onClick = {this.handleHeaderClick}/>
      <List 
        memos = {memos}
        nowid={nowid}
        onItemClick = {this.handleItemClick}/>
      <Contents memos= {memos} nowid = {nowid}/>
      </div>    
      
    );
  }

}


export default App;



