import React, { Component } from 'react'
import TodoContent from './TodoContent' 
import {Provider} from '../context'

// 定义一条数据 来渲染子组件
// 数据最好写在construct里
// props接收父组件的状态
// 点击回车时 自动增加一条数据并渲染视图
// 当todo.length为0 时 渲染其他dom
// 判断isFinish的值 为false放在上面 true放在下面

class TodoList extends Component  {
    constructor(props){
        super(props);
        this.state = {
            _todos:[
                {id: 1, title: '今天下班算数据', isFinished: true},
                {id: 2, title: '今天加班', isFinished: false}
            ],
            id:3,
            types: [
                {id: 1, title: '未完成', type: false},
                {id: 2, title: '已完成', type: true}        
            ]
        };
        
    }
    render(){
        return (
            <div className="container todo-box">

                <h1 className="text-center"> ToDoList—最简单的待办事项列表 </h1>

                <input onKeyUp = {this.addTodo} type="text" className="form-control"/>
                {/*  定义一个value value = 一个对象 */}
                <Provider value =   
                {{deleteTodo : this.deleteTodo,
                changeFinished : this.changeFinished,
                changeTitle : this.changeTitle}}>
                    {this.renderChild()}
                </Provider>
                
            </div>
        )
    }
    renderChild(){
        if(this.state._todos.length <= 0){
            return <div className="alert alert-info">没有代办事项，快去添加吧</div>
        }
       
        return this.state.types.map(item=>{
            return <TodoContent 
            // 每次遍历时传入不同的type从而得到不同状态的todo 并且根据不同状态的todo来渲染标题
                    todos = {this.correctTodos(item.type)}
                    // deleteTodo = {this.deleteTodo}
                    type = {item} key = {item.id}
                    // changeFinished = {this.changeFinished}
                    // changeTitle = {this.changeTitle}
                    />
        })
        
    }
    correctTodos (type) {
        return this.state._todos.filter(todo => todo.isFinished === type)
    }
    // updateTitle(){
    //     return 
    // }
    // 更改状态
    changeFinished = (id) => {
        this.state._todos.forEach(item => {
            if ( item.id === id ) item.isFinished = !item.isFinished
        })
        this.setState({ _todos: this.state._todos })
    }
    addTodo = (e)=>{
        // this丢失是undefined 需要绑定this 如果不想绑定可以用属性声明器
        // 但是需要传参数的话 还是需要bind 或者在{}里直接写函数 再掉用当前函数
        if(e.keyCode === 13){
            if(e.target.value=='') return false
            let title = e.target.value
            e.target.value = ''
            this.setState(prevState =>{
                prevState._todos.push({
                    id:prevState.id++,
                    title :title,
                    isFinished: false
                })
                return prevState
            })
        }
    }
    changeTitle = (id,title) => {
        this.state._todos.forEach(item => {
            if(item.id === id){
                item.title = title
            }
        });
        this.setState({
            _todos:this.state._todos
        })
    }
    deleteTodo = (id)=>{
        // 子组件传一个id 和state数据对比 更新id不同的数据
        this.setState({
            _todos: this.state._todos.filter(item => item.id !== id)
        })
    }
}

export default TodoList