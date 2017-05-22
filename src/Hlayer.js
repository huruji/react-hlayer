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
  constructor(){
    super();
  }
  render(){
    let config = {};
    let shadow = null;
    let content = null;
    if(config.shadow){
      shadow = <div className="hlayer-shadow"></div>
    }
    switch(this.props.type){
      case 'msg':
        config = {...defaultConfig, ...msgConfig.change, ...this.props, ...msgConfig.noChange};
        return <Msg {...config}/>;
      case 'alert':
        config = {...defaultConfig, ...alertConfig.change, ...this.props, ...alertConfig.noChange};
        return <Alert {...config}/>;
      case 'loading':
        config = {...defaultConfig, ...loadingConfig.change, ...this.props, ...loadingConfig.noChange};
        return <Loading {...config}/>;
      case 'iframe':
        config = {...defaultConfig, ...iframeConfig.change, ...this.props, ...iframeConfig.noChange};
        return <Iframe {...config}/>;
      case 'prompt':
        config = {...defaultConfig, ...promptConfig.change, ...this.props, ...promptConfig.noChange};
        return <Prompt {...config}/>;
      case 'photo':
        config = {...defaultConfig, ...photoConfig.change, ...this.props, ...photoConfig.noChange};
        return <Photo {...config}/>;
      case 'tips':
        config = {...defaultConfig, ...tipsConfig.change, ...this.props, ...tipsConfig.noChange};
        return <Tips {...config}/>;
      case 'music':
        config = {...defaultConfig, ...musicConfig.change, ...this.props, ...musicConfig.noChange};
        return <Music{...config}/>
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