import React,{Component} from 'react';

class Iframe extends Component{
  render(){
    let titleStyle, contentStyle;
    titleStyle = {background: this.props.mainBg,color:this.props.mainColor};
    contentStyle = {height: parseInt(this.props.height) - 52 + 'px'};
    return(
        <div>
          <div className="hlayer-content-title hlayer-alert" style={titleStyle}>{this.props.title}</div>
          <div className="hlayer-content-main hlayer-alert-content" >
            <iframe className="hlayer-content-iframe" src={this.props.src} style={contentStyle}></iframe>
          </div>
          <div className="hlayer-close hlayer-iframeclose hlayer-close1" onClick={() => this.props.close()}></div>
        </div>
    )
  }
}

export default Iframe;