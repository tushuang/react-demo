import React,{Component} from 'react'
import PropTypes from 'prop-types';


class Age extends Component {
    render(){
        return(
            <div>{this.props.age+1}岁</div>
        )
    }
}

Age.propTypes = {
    age:PropTypes.number
}

class People extends Component{
    constructor(props){
        super(props)
        this.state = {
            age:12
        }
    }
    render(){
        return(
            <Age age = {this.state.age}></Age>
        )
    }
}

export default People