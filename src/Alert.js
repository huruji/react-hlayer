import React,{Component} from 'react';

class Alert extends Component{
  render(){
    let icon;
    if(this.props.icon){
      icon = <div className={`hlayer-icon hlayer-icon${this.props.icon}`} ><i></i></div>
    }
    return(
       <div>
         <div className="hlayer-content-title hlayer-alert" style={{backgrondColor: this.props.mainBg,color:this.props.mainColor}}>{this.props.title}</div>
         <div className="hlayer-content-main hlayer-alert-content" style="padding-left: 48px; background: rgb(255, 255, 255); color: rgb(0, 0, 0); height: 66px; line-height: 66px;">
           {this.props.text}
           {icon}
         </div>
         <div className="hlayer-content-btns hlayer-alert-content-btns" style="background: rgb(255, 255, 255);">
           <span className="hlayer-content-btns-item hlayer-content-btns-item0" style="background-color: rgb(22, 159, 230); color: rgb(255, 255, 255);">确定</span>
         </div>
         <div className="hlayer-close hlayer-alertclose hlayer-close1"></div>
       </div>
    )
  }
}

export default Alert;