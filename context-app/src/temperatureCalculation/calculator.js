
// 两个兄弟组件需要公用一条数据 需要利用状态提升 将公用的state和方法保存在共同的父级组件中

import React,{Component} from 'react'
import TemperatureInput from './TemperatureInput'
import IsBoiling from './isBoiling'
// 把子组件input 的数据提升到父组件 子组件用的就是一条数据
class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            tempType:{   // 给两个input框分别定义一条数据
                h:{
                    temp:0,
                    type:'h'
                },
                c:{
                    temp:0,
                    type:'c'
                }
            },
            type:[
                {title:"请输入一个摄氏温度"},
                {title:'请输入一个华氏温度'}
            ]
        }
    }
    changeVal = (type,e)=>{  // 把这个方法传给子组件 由子组件调用 
        let val = e.target.value
        if(type == 'c'){ // 如果是摄氏度则修改华氏度的值
            this.setState(preState => {  // 写成函数形式时 需要return 一个最终的状态
                preState.tempType.c.temp = val
                preState.tempType.h.temp = (~~val * 9 / 5) + 32;
                return preState
            })
        }else{
            this.setState(preState => {
                preState.tempType.h.temp = val
                preState.tempType.c.temp = (~~val - 32) * 5 / 9;
                return preState
            })
        }
    }
   
    render(){
        return(
            <div>
                <TemperatureInput changeVal = {this.changeVal} temp = {this.state.tempType.c} type = {this.state.type[0]}/>
                <TemperatureInput changeVal = {this.changeVal} temp = {this.state.tempType.h} type = {this.state.type[1]}/>
                {
                this.state.tempType.c.temp && <IsBoiling temp = {this.state.tempType.c.temp} />
                }
            </div>
            
        )
    }
}

export default Calculator