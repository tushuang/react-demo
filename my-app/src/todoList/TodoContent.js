import React ,{Component} from 'react'
import TodoItem from './TodoItem'

//  控制item渲染的次数

class TodoContent extends Component {
 
    render(){
        let {title,type,id} = this.props.type
        return(
            <div className="todo-content">
                <h3>{title} <span className="label label-primary pull-right">{this.props.todos.length}</span> </h3>

                <ul className="list-group">
                    {this.renderChild()}
                </ul>
            </div>
        )
    }
    renderChild(){
        // map会返回一个新数组
        return this.props.todos.map(item => <TodoItem 
                                            todo = {item} key={item.id}
                                            deleteTodo = {this.props.deleteTodo}
                                            changeFinished = {this.props.changeFinished}
                                            changeTitle = {this.props.changeTitle}
                                            />)
    }
    selectRender(){

    }
}

export default TodoContent