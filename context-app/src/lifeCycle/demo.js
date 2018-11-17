

import React ,{Component,PureComponent} from 'react'
import { black } from 'ansi-colors';


class Son extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
           style:{ width:'100px',
            height:'100px',
            background: this.props.color  // props改变 state不会更新
        }}
    }
    componentWillMount(){
        console.log('Child willMount')
    }
    render(){
        return(
            <div style = {this.state.style}>
            {console.log('Son render()')}
            </div>
        )
    }
    componentDidMount(){
        console.log('Child DidMount')
    }
    componentWillReceiveProps(props,state){
        if ( props.color === this.props.color ) return false;
        console.log(props,state)  // 我觉得第一层是可以改的 state里再有对象的话就不能改了 只能整体替换 
        this.setState((pre)=>{
            let newStyle = {...pre.style}
            newStyle.background = props.color
            console.log(props.color)
            return {style:newStyle}
        })
        // this.setState((pre)=>{
        //     pre.style.width = '200px'  // 不能这应该 对象的属性是只读的
        //     return pre
        // })
    }
    // 这里做的事情可以直接用继承pureComponent 代替 
    // shouldComponentUpdate(props,state){  // 执行了这个函数之后 dom才会rerender 如果返回false的话 永远都不会重新渲染
    //     console.log('Child shouldComponent')
    //     // 可以在这里做一些判断 避免一些不必要的渲染
    //     if(this.props.color == props.color ){
    //         return false
    //     }
    //     return true
    // }
    componentWillUpdate(){
        console.log("Son componentWillUpdate")
    }
    componentDidUpdate(props){
        
        console.log(props.color == this.props.color)
        if(props.color !== this.props.color){
            console.log(' 此次组件rerender是因为color变化 执行相应的动作')
        }
    }
    componentWillUnmount(props){
        console.log('组件卸载')
    }
}

class Father extends Component {
    constructor(){
        super()
        this.state = {
            color :'pink' 
        }
    }
    componentWillMount(){
        console.log('Father willMount')
    }
    changeColor = (color)=>{
        this.setState({
            color:color
        })
    }
    render(){
        return(
            <>
                <button onClick = {this.changeColor.bind(null,'black')}>blcak</button>
                <button onClick = {this.changeColor.bind(null,'pink')}>pink</button>
                <button onClick = {this.changeColor.bind(null,'black')}>blcak</button>
                {console.log('Father render()')}
                {this.state.color !== 'black'  &&<Son color = {this.state.color}/>}
            </> 
        )
        
    }
    componentDidMount(){  // 子组件挂载完后 父组件才会执行这个
        console.log('Father DidMount')
    }
    shouldComponentUpdate(){  // 执行了这个函数之后 dom才会rerender 如果返回false的话 永远都不会重新渲染
        console.log('Father shouldComponent')
        return true
    }
}

export default Father