

import React,{Component} from 'react'

// 点击删除删除父组件的数据 所以需要父组件传一个方法给子组件
// 点击checked决定事件是否完成
// 点击checked可以更改事件状态
// 点击span可以显示输入框 修改事件 可以先定义一条数据 来控制input输入框是否显示 最开始是不显示的
// 当input失去焦点时 修改父组件的数据 可以调用父组件的方法

class TodoItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            isUpdate: false
        }
    }
    render(){
        let {isUpdate} = this.state
        let {deleteTodo,changeFinished} = this.props
        let {id,title,isFinished} = this.props.todo
        return(
            <li className="list-group-item">
                <div className="row">
                    <input onChange = {changeFinished.bind(null,id)} defaultChecked = {isFinished} className="col-xs-1" type="checkbox" />
                    <div className="title col-xs-8">
                        { isUpdate? <input onBlur = {this.updateTitle.bind(null,id)} ref = {'input'} type="text" />:<span onClick = {this.isShowInput.bind(null,title)}>{title}</span>}
                    </div>
                    {/* 给函数传参时 要使用bind */}
                    <button onClick = {deleteTodo.bind(null,id)}  type="button" className="close col-xs-1" ><span>×</span></button>
                </div>
            </li>
        )
    }
    updateTitle = (id) => {
        this.setState({
            isUpdate:!this.state.isUpdate
        })
        let title = this.refs.input.value
        this.props.changeTitle(id,title)
    }
    isShowInput = (title,e)=> {
        this.setState({
            isUpdate:!this.state.isUpdate
        })
        // this.el.value = title
        // setState是异步函数放在异步队列里执行 所以选择input的时候还没有这个dom
        setTimeout(() => {
            this.refs.input.value = title
            this.refs.input.focus()
        }, 0);
        
    }
}

export default TodoItem