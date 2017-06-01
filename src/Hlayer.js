import React,{Component} from 'react';

import Msg from './Msg';
import Alert from './Alert';
import Loading from './Loading';
import Iframe from './Iframe';
import Prompt from './Prompt';
import Photo from './Photo';
import Tips from './Tips';
import Music from './Music';

import {defaultConfig, msgConfig, alertConfig, loadingConfig, iframeConfig, photoConfig, promptConfig, tipsConfig, musicConfig} from './config';

class Hlayer extends Component{
  constructor(props){
    super(props);
    console.log(defaultConfig);
    const config =this.setType();
    console.log(config);
    if(config.cancelBtn) {
      config.btns.unshift('取消');
      config.btnCb.unshift(config.cancelCb);
    }
    if(config.confirmBtn){
      config.btns.unshift('确定');
      config.btnsCb.unshift(config.confirmCb);
    }
    this.state = {config:config,positionStyle:{},show:true};
    this.close = this.close.bind(this);
  }
  setPosition(){
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
        config = {...defaultConfig, ...msgConfig.change, ...this.props.config, ...msgConfig.noChange};
        break;
      case 'alert':
        config = {...defaultConfig, ...alertConfig.change, ...this.props.config, ...alertConfig.noChange};
        break;
      case 'loading':
        config = {...defaultConfig, ...loadingConfig.change, ...this.props.config, ...loadingConfig.noChange};
        break;
      case 'iframe':
        config = {...defaultConfig, ...iframeConfig.change, ...this.props.config, ...iframeConfig.noChange};
        break;
      case 'prompt':
        config = {...defaultConfig, ...promptConfig.change, ...this.props.config, ...promptConfig.noChange};
        break;
      case 'photo':
        config = {...defaultConfig, ...photoConfig.change, ...this.props.config, ...photoConfig.noChange};
        break;
      case 'tips':
        config = {...defaultConfig, ...tipsConfig.change, ...this.props.config, ...tipsConfig.noChange};
        break;
      case 'music':
        config = {...defaultConfig, ...musicConfig.change, ...this.props.config, ...musicConfig.noChange};
        break;
    }
    console.log(config);
    return config;
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
  }
  componentDidMount(){
    this.setPosition();
    if(this.state.config.time) {
      this.setShowShift(this.state.config.time)
    }
  }
  close(){
    this.setState({show:false});
    if(this.props.handleShow){
      this.props.handleShow(false);
    }
  }
  componentWillUnmount(){
    console.log(23);
    this.state.config.btns = [];
    this.state.config.btnsCb = [];
    clearTimeout(this.timer);
  }
  render(){
    let shadow = null;
    let content = null;
    if(this.state.config.shadow){
      shadow = <div className="hlayer-shadow"></div>
    }
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
        content = <Photo {...this.state.config} close={this.close}/>;
        break;
      case 'tips':
        content = <Tips {...this.state.config} close={this.close}/>;
        break;
      case 'music':
        content = <Music{...this.state.config} close={this.close}/>;
        break;
    }
    let hlayerStyle = {width:this.state.config.width,height:this.state.config.height,...this.state.positionStyle};
    if(this.props.type==='loading'){
      hlayerStyle.backgroundColor = 'transparent';
      hlayerStyle.boxShadow = 'none';
    }
    if(this.state.show){
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