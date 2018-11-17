
import React, {Component} from 'react'
import DataSource from './DateSource'
import HigherOrderComponent from  './Hoc'

class CommentList extends Component {
    render(){
        return(
            <div>
                <ul>
                   { this.props.info.map((item)=> <li key = {item.id}>{item.title}</li> )}
                </ul>
            </div>
        )
    }
}

// 把自身传入高阶组件 高阶组件再返回一个组件

export default HigherOrderComponent(CommentList,DataSource.getComments.bind(DataSource))