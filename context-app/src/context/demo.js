

import React,{Component} from 'react'
import bus from './eventBus'

const {Provider,Consumer} = React.createContext()

class Mother extends Component {
    constructor(props){
        super(props)
        this.state = {
            money:100
        }
        bus.on('buyEat',()=>{
            console.log(this)
            this.setState((preState)=>{
                preState.money = --preState.money
                return preState
            })
        })
    }
    buyEat(){
        
    }
    render(){
        return(
            <div>
                <Provider value = {this.state.money}>
                    <Father/>
                </Provider>
                <div>我有{this.state.money}块钱</div>
            </div>
        )
    }
}
class Father extends Component {
    render(){
        return(
            // <Consumer>
            //     {value => <div>我有{value}块钱</div>}
            // </Consumer>
            <Son/>
        )
    }
}
class Son extends Component {
    buyEat(){

    }
    render(){
        return(
            <div>
                <Consumer>
                    {value => <div>我有{value}钱</div>}
                </Consumer>
                <button onClick = {()=>bus.emit('buyEat')}>买零食</button>
            </div>
        ) 
    }
    
   
}

export default Mother