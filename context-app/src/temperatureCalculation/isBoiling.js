import React,{Component} from 'react'

function IsBoiling (props) {
    if(props.temp>100){
        return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>
}

export default IsBoiling