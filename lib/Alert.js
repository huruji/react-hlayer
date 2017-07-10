import React,{Component} from 'react';

class Alert extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
  }
  render(){
    let icon, titleStyle, contentStyle, btnStyle, btnContainerStyle, btns;
    if(this.props.icon){
      icon = <div className={`hlayer-icon hlayer-icon${this.props.icon}`} ><i></i></div>
    }
    titleStyle = {background: this.props.mainBg,color:this.props.mainColor};
    contentStyle = {background: this.props.contentBg, color: this.props.contentColor, height: `${parseInt(this.props.height) - 82}px`,lineHeight: `${parseInt(this.props.height) - 82}px` };
    if(this.props.icon){
      contentStyle.paddingLeft = '48px';
    }
    btnContainerStyle = {background: this.props.contentBg};
    btnStyle = {background: this.props.mainBg,color:this.props.mainColor};
    return(
       <div>
         <div className="hlayer-content-title hlayer-alert" style={titleStyle}>{this.props.title}</div>
         <div className="hlayer-content-main hlayer-alert-content" style={contentStyle}>
           {this.props.text}
           {icon}
         </div>
         <div className="hlayer-content-btns hlayer-alert-content-btns" style={btnContainerStyle}>
           {
             this.props.btns.map((item, i) => {
               let btnCb = () => {};
               if(this.props.btnsCb[i] && this.props.btnsCb[i] == 'close'){
                 btnCb = this.props.close;
               } else{
                 this.props.btnsCb[i] && (btnCb = this.props.btnsCb[i]);
               }
               return <span key={i} onClick={() => btnCb()} className={`hlayer-content-btns-item hlayer-content-btns-item${i}`} style={btnStyle}>{item}</span>
             })
           }
         </div>
         <div className="hlayer-close hlayer-alertclose hlayer-close1" onClick={() => this.props.close()}></div>
       </div>
    )
  }
}

export default Alert;