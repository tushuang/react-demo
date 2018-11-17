
import React,{Component} from 'react'
import CommentList from './CommentList'
import DateSource from './DateSource'
import BlogList from './BlogList'
class HocDemo extends Component {
    render(){
        return(
            <div>
                <button onClick = { DateSource.addComment.bind('add') }>增加数据</button>  
                {/* 点击时触发子组件绑定的函数 */}
                <CommentList/>
                <button onClick = { DateSource.addBlog.bind('add') }>增加数据</button>
                <BlogList/>
            </div>
            
        )
    }
}

export default HocDemo