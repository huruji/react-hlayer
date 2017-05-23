import React,{Component} from 'react';

class Msg extends Component{
  render(){
    let icon = null;
    if(this.props.icon){
      
    }
    return(
        <div className={`hlayer-content-main hlayer-msg-content`} style={{height: this.props.height,lineHeight:this.props.height}}>
          {this.props.text}
          <div></div>
        </div>
    )
  }
}

export default Msg;