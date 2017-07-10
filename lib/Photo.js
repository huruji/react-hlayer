import React,{Component} from 'react';

class Photo extends Component{
  constructor(){
    super();
    this.state= {show:false};
  }
  componentDidMount(){
    /*if(this.props.playTime) {
      this.timer = setTimeout(() => {
        this.props.nextImg()
      }, this.props.playTime)
    }*/
    /*console.log(this.img.complete);
    this.timer = setInterval(() => {
      if(this.img.complete){
        this.props.load();
        clearInterval(this.timer);
      }
    }, 10);
    console.log('mount');*/
  }
  componentWillMount() {
    clearInterval(this.timer);
  }
  render(){
    console.log(this.props);
    const contentStyle ={padding: '0px', background: this.props.contentBg, color: this.props.contentColor, lineHeight: '30px'};
    return(
        <div onMouseOver={() => this.setState({show: true})} onMouseLeave={() => this.setState({show: false})}>
          <div className="hlayer-content-main hlayer-photo-content" style={contentStyle}>
              {this.props.curImg}
              <div className="hlayer-content-photo-text" style={{display: this.state.show ? 'block' : 'none'}}>{this.props.photos[this.props.photoIndex].text}</div>
              <div className="hlayer-content-photo-next" style={{display: this.state.show ? 'block' : 'none'}} onClick={this.props.nextImg}></div>
              <div className="hlayer-content-photo-pre" style={{display: this.state.show ? 'block' : 'none'}} onClick={this.props.prevImg}></div>
          </div>
          <div className="hlayer-close hlayer-photoclose hlayer-close2" onClick={() => this.props.close()}></div>
        </div>
    )
  }
}

export default Photo;