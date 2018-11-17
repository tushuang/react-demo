// 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
// 处理不同组件的相同逻辑
import DataSource from './DateSource';

import React, { Component } from "react";

const HigherOrderComponent = (UIComponent,hander) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        info: hander()
      };
    }
    componentDidMount() {
      DataSource.addEventListen('add',this.addComment); // 添加事件监听 等待被触发（即button被点击的时候）
    }
    // componentWillUnmount(){
    //   DataSource.removeEventListen('add',this.addComment)
    // }
    addComment = () => {
      this.setState({
        info: hander()
      });
    };
    render(){
        return(
            <UIComponent {...this.state}/>
        )
    }
  };
};

export default HigherOrderComponent;
