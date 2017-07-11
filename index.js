import React,{Component} from 'react';
import Msg from './lib/Msg';
import Alert from './lib/Alert';
import Loading from './lib/Loading';
import Iframe from './lib/Iframe';
import Prompt from './lib/Prompt';
import Photo from './lib/Photo';
import Tips from './lib/Tips';
import Music from './lib/Music';

import {defaultConfig, msgConfig, alertConfig, loadingConfig, iframeConfig, photoConfig, promptConfig, tipsConfig, musicConfig} from './config';

class Hlayer extends Component{
  constructor(props){
    super(props);
    const config =this.setType();
    if(config.cancelBtn) {
      config.btns.unshift('取消');
      config.btnCb.unshift(config.cancelCb);
    }
    if(config.confirmBtn){
      config.btns.unshift('确定');
      config.btnsCb.unshift(config.confirmCb);
    }
    let complete = true;
    this.state = {config:config,positionStyle:{},show:true, complete: complete, load:false};
    this.close = this.close.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.loadImg = this.loadImg.bind(this);
    this.load = this.load.bind(this);
  }
  load() {
    this.setState({load:true});
  }
  nextImg(){
    let config = this.state.config;
    let index = this.state.config.photoIndex;
    if(index >= (this.state.config.photos.length - 1)){
      index = 0;
    } else {
      index += 1;
    }
    this.setState({config:{...config,photoIndex:index}, complete: false});
    setTimeout(()=>{
      this.setState({complete: true});
    }, 1);
  }
  prevImg(){
    let config = this.state.config;
    let index = this.state.config.photoIndex;
    if(index <= 0){
      index = this.state.config.photos.length - 1;
    } else {
      index -= 1;
    }
    this.setState({config:{...config,photoIndex:index}, complete: false});
    setTimeout(()=>{
      this.setState({complete: true});
    }, 1);
  }
  setPosition(){
    if(!this.hlayer){
      return;
    }
    const positionType = this.state.config.position;
    const layerHeight = this.hlayer.offsetHeight;
    const layerWidth = this.hlayer.offsetWidth;
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    let positionStyle = {};
    let setTop, setLeft;
    if(positionType === 'random'){
      setTop = Math.floor(Math.random()*(winHeight-layerHeight + 1)) + 'px';
      setLeft = Math.floor(Math.random()*(winWidth - layerWidth) + 1) + 'px';
      positionStyle = {left:setLeft,top: setTop};
    }
    if(positionType === 0) {
      setTop = (winHeight - layerHeight) / 2 + 'px';
      setLeft = (winWidth - layerWidth) / 2 + 'px';
      positionStyle = {left:setLeft,top: setTop};
    } else if(positionType === 1){
      positionStyle = {left:'0px',top:'0px'};
    } else if(positionType === 2) {
      setTop = '0px';
      setLeft = (winWidth - layerWidth) / 2 + 'px';
      positionStyle = {left:setLeft,top: setTop};
    } else if(positionType === 3) {
      positionStyle = {top:'0px',right:'0px'};
    } else if(positionType === 4) {
      positionStyle = {bottom:'0px',left:'0px'};
    } else if(positionType === 5) {
      setLeft = (winWidth - layerWidth) / 2 + 'px';
      positionStyle = {bottom:'0px',left:setLeft};
    } else if(positionType === 6) {
      positionStyle ={bottom:'0px',right:'0px'};
    }
    this.setState({positionStyle:positionStyle});
  }
  setType(){
    let config = {};
    if(!this.props.config.btns){
      this.props.config.btns = [];
    }
    if(!this.props.config.btnsCb){
      this.props.config.btnsCb = [];
    }
    switch(this.props.type){
      case 'msg':
        config = {...defaultConfig, ...msgConfig.change, ...this.props.config, ...msgConfig.noChange, type: this.props.type};
        break;
      case 'alert':
        config = {...defaultConfig, ...alertConfig.change, ...this.props.config, ...alertConfig.noChange, type: this.props.type};
        break;
      case 'loading':
        config = {...defaultConfig, ...loadingConfig.change, ...this.props.config, ...loadingConfig.noChange, type: this.props.type};
        break;
      case 'iframe':
        config = {...defaultConfig, ...iframeConfig.change, ...this.props.config, ...iframeConfig.noChange, type: this.props.type};
        break;
      case 'prompt':
        config = {...defaultConfig, ...promptConfig.change, ...this.props.config, ...promptConfig.noChange, type: this.props.type};
        break;
      case 'photo':
        config = {...defaultConfig, ...photoConfig.change, ...this.props.config, ...photoConfig.noChange, type: this.props.type};
        break;
      case 'tips':
        config = {...defaultConfig, ...tipsConfig.change, ...this.props.config, ...tipsConfig.noChange, type: this.props.type};
        break;
      case 'music':
        config = {...defaultConfig, ...musicConfig.change, ...this.props.config, ...musicConfig.noChange, type: this.props.type};
        break;
    }
    return config;
  }
  loadImg(){
    if(this.props.type == 'photo') {
      this.setState({complete: false});
      let imgs = [];
      this.props.config.photos.forEach((item, i) => {
        let img = document.createElement('img');
        img.src = item.img;
        imgs.push(img);
      });
      this.completeTimer = setInterval(function() {
        let complete = true;
        for(let i = 0 ; i < imgs.length; i++) {
          if(!imgs[i].complete) {
            complete = false;
            break
          }
        }
        if(complete){
          clearInterval(this.completeTimer);
          this.setState({complete: true});
        }
      }.bind(this), 50)
    }
  }
  setShowShift(time){
    this.timer = setTimeout(()=> {
      this.setState({show:false});
      if(this.props.handleShow){
        this.props.handleShow(false);
      }
    }, time);
  }
  componentWillMount(){
    if(this.props.type == 'photo'){
      this.img = <img className="hlayer-content-photo" src={this.state.config.photos[this.state.config.photoIndex].img} style={{display: 'block'}}/>
      this.timer = setInterval(() => {
        if(this.img.complete){
          console.log('sdf');
          this.setState({complete: true});
          clearInterval(this.timer);
        }
      }, 10);
    }

  }
  componentDidMount(){
    this.setPosition();
    if(this.state.config.time) {
      this.setShowShift(this.state.config.time)
    }
    this.loadImg();
  }
  componentDidUpdate(prevProps, prevState){
    if((this.state.config.photoIndex == prevState.config.photoIndex) && (this.state.complete !== prevState.complete)){
      console.log(12342412341);
      if(this.state.load) {
        this.setPosition();
        this.setState({load: false});
      }
    }
  }
  close(){
    this.setState({show:false});
    if(this.props.handleShow){
      this.props.handleShow(false);
    }
  }
  componentWillUnmount(){
    this.state.config.btns = [];
    this.state.config.btnsCb = [];
    clearTimeout(this.timer);
  }
  render(){
    let shadow = null;
    let content = null;
    if(this.state.complete){
      switch(this.props.type){
        case 'msg':
          content = <Msg {...this.state.config} close={this.close}/>;
          break;
        case 'alert':
          content = <Alert {...this.state.config} close={this.close}/>;
          break;
        case 'loading':
          content = <Loading {...this.state.config} close={this.close}/>;
          break;
        case 'iframe':
          content = <Iframe {...this.state.config} close={this.close}/>;
          break;
        case 'prompt':
          content = <Prompt {...this.state.config} close={this.close}/>;
          break;
        case 'photo':
          content = <Photo {...this.state.config} close={this.close} curImg={this.img} load={this.load} nextImg={this.nextImg} prevImg={this.prevImg} />;
          break;
        case 'tips':
          content = <Tips {...this.state.config} close={this.close}/>;
          break;
        case 'music':
          content = <Music{...this.state.config} close={this.close}/>;
          break;
      }
    }
    if(this.state.config.shadow){
      shadow = <div className="hlayer-shadow"></div>
    }
    if(this.state.config.resize) {
      window.onresize = function() {
        this.setPosition()
      }.bind(this);
    }
    let hlayerStyle = {width:this.state.config.width,height:this.state.config.height,...this.state.positionStyle};
    if(this.props.type==='loading'){
      hlayerStyle.backgroundColor = 'transparent';
      hlayerStyle.boxShadow = 'none';
    }
    if(this.props.type === 'photo'){
      hlayerStyle.padding = '10px';
    }
    if(this.state.show && this.state.complete){
      return(
          <div className="hlayer">
            {shadow}
            <div className={`hlayer-content hlayer-${this.props.type} hlayer-animate${this.state.config.animateType}`} style={hlayerStyle} ref={(hlayer) => this.hlayer = hlayer}>
              {content}
            </div>
          </div>
      )
    } else{
      return null;
    }
  }
}

export default Hlayer;