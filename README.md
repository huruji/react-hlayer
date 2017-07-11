# react-hlayer
Hlayer的react版

## 安装
```sh
npm install hlayer-react
```

## 引入

```javascript
import Hlayer from 'react-hlayer';
import 'react-hlayer/hlayer.css';
```

## 使用
使用方式为将Hlayer看做是一个组件，传递给Hlayer组件props即可，其中props中需要的两个属性为type和config，其中type为hlayer的类型，config为每个hlayer方法中的参数，如调用一个alert：
```js
<Hlayer type="alert" handleShow={this.handleAlertShow} config = {{contentBg: '#982a2a' ,contentColor:"#fff" ,animateType:4, position: 0, shadow: false, text:'你帅吗', btns: ['帅','很帅'],confirmBtn:false, time: 400000, icon:4,}}/>
```

而每种type的具体config设置可以参考hlayer的[文档](https://github.com/huruji/Hlayer)