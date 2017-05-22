import React,{Component} from 'react';

import Msg from './Msg';
import Alert from './Alert';
import Loading from './Loading';
import Iframe from './Iframe';
import Prompt from './Prompt';
import Photo from './Photo';
import Tips from './Tips';
import Music from './Music';

const defaultConfig = {
  type:'msg',
  mainBg:'#169FE6',
  mainColor: '#fff',
  contentBg:'#fff',
  contentColor:'#000',
  title: '信息',
  text: '提示信息',
  width: '',
  height: '',
  btns:'',
  confirmBtn: true,
  confirmCb: false,
  cancelBtn: false,
  cancelCb: false,
  animateType: 1,
  resize:true,
  position: 0,
  shadow:true,
  time: false,
  loadingType:1,
  closeBtn:false,
  url:false,
  formType:1,
  move:true,
  photos:false,
  closeType:1,
  tipsPosition:'right',
  tipsCon:'',
  autoPlay:false,
  playTime:5000,
  allowEmpty:true,
};

class Hlayer extends Component{
  constructor(){
    super();
  }
  render(){
    const config = {...defaultConfig,...this.props};
    let shadow = null;
    let content = null;
    if(config.shadow){
      shadow = <div className="hlayer-shadow"></div>
    }

    return(
        <div className="hlayer">
          {shadow}
          <div className={`hlayer-content hlayer-${config.type} hlayer-animate${config.animateType}`} style={{width:config.width,height:config.height}}>

          </div>
        </div>
    )
  }
}