import React, { Component } from 'react';
import logo from './logo.svg';
import Hlayer from './Hlayer';

class App extends Component {
  constructor(){
    super();
    this.state = {show:false};
    this.handleShow = this.handleShow.bind(this);
  }
  handleShow(show){
    this.setState({show: show});
  }
  render() {
    let lay = null;
    if(this.state.show){
      lay=<Hlayer type="msg" handleShow={this.handleShow} config = {{contentBg: '#169fe6' ,contentColor:"#fff" ,animateType:4, position: 2, shadow: false, text:'追风少年', width: '200px',  time: 300000, icon:4,}}/>
    }
    return (
      <div className="App">
        <input style={{
          height: '50px',
          padding: '10px',
          background: '#fff',
          minWidth: '100px',
          cursor: 'pointer',
          fontSize: '14px',
          margin: '20px 20px 0 0',
          borderRadius: '2px',
          border: '1px solid #aaa',
        }} value="Msg" type="button" onClick={()=>{this.setState((prevState) => ({show: true}))}}/>
        {lay}
      </div>
    );
  }
}

export default App;
