
import React, {Component} from 'react'
import DataSource from './DateSource'
import HigherOrderComponent from  './Hoc'

class BlogList extends Component {
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



export default HigherOrderComponent(BlogList,DataSource.getBlogs.bind(DataSource))