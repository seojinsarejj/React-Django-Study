import React,{ Component } from 'react';

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
    }catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        {this.state.memos.map(item => (

          <div key={item.id}>
            <h1>{item.title}</h1>
            <sqan>{item.content}</sqan>
          </div>
        ))}
        </div>
    );
  }

}


export default App;



