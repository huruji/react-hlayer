import React, { Component } from 'react';
import logo from './logo.svg';
import Hlayer from './Hlayer';

class App extends Component {
  constructor(){
    super();
    this.state = {msgshow:false,alertshow:false, loadingshow:false, iframeshow: false, promptshow: false};
    this.handleMsgShow = this.handleMsgShow.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
    this.handleLoadingShow = this.handleLoadingShow.bind(this);
    this.handleIframeShow = this.handleIframeShow.bind(this);
    this.handlePromptShow = this.handlePromptShow.bind(this);
    this.handlePhotoShow = this.handlePhotoShow.bind(this);
  }
  handlePhotoShow(show){
    this.setState({photoshow: show});
  }
  handleMsgShow(show){
    this.setState({msgshow: show});
  }
  handleAlertShow(show){
    this.setState({alertshow: show});
  }
  handleLoadingShow(show){
    this.setState({loadingshow: show});
  }
  handleIframeShow(show) {
    this.setState({iframeshow: show})
  }
  handlePromptShow(show) {
    this.setState({promptshow: show})
  }
  render() {
    const inputStyle = {height: '50px', padding: '10px', background: '#fff', minWidth: '100px', cursor: 'pointer', fontSize: '14px', margin: '20px 20px 0 0', borderRadius: '2px', border: '1px solid #aaa',};
    let lay = null, alertlay=null, loadinglay = null, iframelay = null, promptlay = null;
    if(this.state.msgshow){
      lay=<Hlayer type="msg" handleShow={this.handleMsgShow} config = {{contentBg: '#169fe6' ,contentColor:"#fff" ,animateType:4, position: 3, shadow: false, text:'追风少年',   time: 30000, icon:4,}}/>
    }
    if(this.state.alertshow){
      alertlay=<Hlayer type="alert" handleShow={this.handleAlertShow} config = {{contentBg: '#982a2a' ,contentColor:"#fff" ,animateType:4, position: 0, shadow: false, text:'你帅吗', btns: ['帅','很帅'],confirmBtn:false, time: 400000, icon:4,}}/>
    }
    if(this.state.loadingshow){
      loadinglay=<Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType:4, position: 0, shadow: false,    time: 4000, loadingType: 4}}/>
    }
    if(this.state.iframeshow){
      iframelay=<Hlayer type="iframe" handleShow={this.handleIframeShow} config = {{animateType:4, position: 0, shadow: false,time: 400000,src: 'http://hlayer.huruji3.com/'}}/>
    }
    if(this.state.promptshow) {
      promptlay=<Hlayer type="prompt" handleShow={this.handlePromptShow} config = {{animateType:4, formType:4, position: 0,options: {name: 'sex', inputs:['男','女']}, shadow: false,time: 400000,src: 'http://hlayer.huruji3.com/', confirmCb: (data) => {console.log(data);this.setState({promptshow: false})}}}/>
    }
    if(this.state.photoshow) {
      promptlay=<Hlayer type="photo" handleShow={this.handlePhotoShow} config = {{animateType:4, formType:4, position: 0, shadow: false,time: 400000, photos: [{
        img: "http://hlayer.huruji3.com/img/jay/1.jpg",
        text: "不能说的秘密"
      }, {
        img: "http://hlayer.huruji3.com/img/jay/2.jpg",
        text: "你永远是我眼中的苹果"
      }, {
        img: "http://hlayer.huruji3.com/img/jay/3.jpg",
        text: "最美的不是下雨天"
      }, {
        img: "http://hlayer.huruji3.com/img/jay/4.jpg",
        text: "你不要在消失了"
      }, {
        img: "http://hlayer.huruji3.com/img/jay/5.jpg",
        text: "遇见你已经是不可思议了"
      }]}}/>
    }
    return (
      <div className="App">
        <input style={inputStyle} value="Msg" type="button" onClick={()=>{this.setState((prevState) => ({msgshow: true}))}}/>
        {lay}
        {alertlay}
        {loadinglay}
        {iframelay}
        {promptlay}
        <input style={inputStyle} type="button" value="alert"  onClick={()=>{this.setState((prevState) => ({alertshow: true}))}}/>
        <input style={inputStyle} type="button" value="loading"  onClick={()=>{this.setState((prevState) => ({loadingshow: true}))}}/>
        <input style={inputStyle} type="button" value="iframe"  onClick={()=>{this.setState((prevState) => ({iframeshow: true}))}}/>
        <input style={inputStyle} type="button" value="prompt"  onClick={()=>{this.setState((prevState) => ({promptshow: true}))}}/>
        <input style={inputStyle} type="button" value="photo"  onClick={()=>{this.setState((prevState) => ({photoshow: true}))}}/>
      </div>
    );
  }
}

export default App;
