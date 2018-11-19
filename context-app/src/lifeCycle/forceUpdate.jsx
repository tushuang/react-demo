

import React ,{Component,PureComponent} from 'react'

class Son extends PureComponent {
    constructor(props){
        super(props)  
        this.state = {
           style:{ width:'100px',
            height:'100px',
            background: this.props.color  // props改变 state不会更新
        }}
    }
    render(){
        return(
            <div style = {this.state.style}>
            {console.log('Son render()')}
            </div>
        )
    }
    componentWillReceiveProps(props,state){
        this.forceUpdate()    // 每次传递属性时 都会强制渲染 并忽略shouldComponentUpdate
        if ( props.color === this.props.color ) return false;
        this.setState((pre)=>{
            let newStyle = {...pre.style}
            newStyle.background = props.color
            console.log(props.color)
            return {style:newStyle}
        })
    }
}

class Father extends Component {
    constructor(){
        super()
        this.state = {
            color :'pink' 
        }
    }
    changeColor = (color)=>{
        this.setState({
            color:color
        })
    }
    render(){
        return(
            <>
                {console.log('Father render')}
                <button onClick = {this.changeColor.bind(null,'black')}>blcak</button>
                <button onClick = {this.changeColor.bind(null,'pink')}>pink</button>
                <button onClick = {this.changeColor.bind(null,'yellow')}>yellow</button>
                <Son color = {this.state.color}></Son>
            </> 
        )
        
    }
 
}

export default Father