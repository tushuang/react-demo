import React,{Component} from 'react'
import './demo.css'


class Cover extends Component {
    constructor(props){
        super(props)
        this.state = {
            block:true
        }
    }
    componentWillReceiveProps(nextprops){
        // flase   false       flase true
        if(nextprops.block == this.state.block){
            console.log('ture')
            this.setState({
                block:!nextprops.block
            })
        }else{
            console.log('false')
            this.setState({
                block:nextprops.block
            })
        }
        
    }
    changeDisplay = ()=>{
        
        this.setState(preProps=>{
            this.state.block = !preProps.block
            return preProps  // 永远是当前的值
        })
        
    }
    render(){
        return(
            <div className = 'cover-box' style = {{display:this.state.block?'block':'none'}}>
                <span onClick = {this.changeDisplay} >×</span>
                <h3>
                    {this.props.title}
                    {/* {this.props.children} */}
                </h3>
                <span>
                    {this.props.context}
                </span>
            </div>
        )
    }
}

class Slot extends Component {
    constructor(props){
        super(props)
        this.state = {
            block:true
        }
    }
    changeDisplay = ()=>{
        this.setState({
            block : !this.state.block
        })
    }
    render(){
        return(
            <div>
                <button  onClick = {this.changeDisplay}>点我</button>
                <Cover 
                block = {this.state.block}
                title = {'kuso'}
                changeDisplay = {this.changeDisplay}
                context = {'ganbade'}/>
                {/* <Cover>
                title = {'kuso'}
                context = {'ganbade'}
                </Cover> */}
            </div>
            
        )
    }
}

export default Slot