import React,{Component} from 'react';

class Photo extends Component{
  constructor(){
    super();
    this.state= {show:false};
  }
  render(){
    console.log(this.props);
    const contentStyle ={padding: '0px', background: this.props.contentBg, color: this.props.contentColor, lineHeight: '30px'};
    return(
        <div onMouseOver={() => this.setState({show: true})} onMouseLeave={() => this.setState({show: false})}>
          <div className="hlayer-content-main hlayer-photo-content" style={contentStyle}>
            <img className="hlayer-content-photo" src={this.props.photos[this.props.photoIndex].img} style={{display: 'block'}}/>
              <div className="hlayer-content-photo-text" style={{display: this.state.show ? 'block' : 'none'}}>{this.props.photos[this.props.photoIndex].text}</div>
              <div className="hlayer-content-photo-next" style={{display: this.state.show ? 'block' : 'none'}} onClick={this.props.nextImg()}></div>
              <div className="hlayer-content-photo-pre" style={{display: this.state.show ? 'block' : 'none'}} onClick={this.props.prevImg()}></div>
          </div>
          <div className="hlayer-close hlayer-photoclose hlayer-close2"></div>
        </div>
    )
  }
}

export default Photo;