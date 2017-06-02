import React,{Component} from 'react';

class Prompt extends Component{
  render(){
    console.log('prompt');
    console.log(this.props);
    let titleStyle, contentStyle, btnStyle, btnContainerStyle, form;
    titleStyle = {background: this.props.mainBg,color:this.props.mainColor};
    contentStyle = {background: this.props.contentBg, color: this.props.contentColor, height: `${parseInt(this.props.height) - 82}px`,lineHeight: '30px' };
    if(this.props.icon){
      contentStyle.paddingLeft = '48px';
    }
    btnContainerStyle = {background: this.props.contentBg};
    btnStyle = {background: this.props.mainBg,color:this.props.mainColor};
    if(this.props.formType == 1) {
      form = <input className="hlayer-content-prompt hlayer-form-group hlayer-form-input" ref={(input) => this.input = input } />
    }
    if(this.props.formType == 2) {
      form = <input className="hlayer-content-prompt hlayer-form-group hlayer-form-input" type="password"/>
    }
    if(this.props.formType == 3) {
      form = <textarea className="hlayer-content-prompt hlayer-form-group hlayer-form-form-textarea" style={{height: parseInt(this.props.height) - 125 + 'px'}}/>
    }
    return(
        <div>
          <div className="hlayer-content-title hlayer-prompt" style={titleStyle}>信息</div>
          <div className="hlayer-content-main hlayer-prompt-content" style={contentStyle}>提示信息
            {form}
          </div>
          <div className="hlayer-content-btns hlayer-prompt-content-btns" style={btnContainerStyle}>
          {
            this.props.btns.map((item, i) => {
              let btnCb = () => {};
              if(this.props.btnsCb[i] && this.props.btnsCb[i] == 'close'){
                btnCb = this.props.close;
              } else{
                this.props.btnsCb[i] && (btnCb = this.props.btnsCb[i]);
              }
              return <span key={i} onClick={() => {
                let data;
                if(this.props.formType == 1 || this.props.formType == 2 || this.props.formType == 3) {
                  data = this.input.value;
                }
                btnCb(data);
              }} className={`hlayer-content-btns-item hlayer-content-btns-item${i}`} style={btnStyle}>{item}</span>
            })
          }
          </div>
          <div className="hlayer-close hlayer-promptclose hlayer-close1" onClick={() => this.props.close()}></div>
        </div>
    )
  }
}

export default Prompt;