import React,{Component} from 'react'

class TemperatureInput extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let {temp,type} = this.props.temp
        let {title} = this.props.type
        let {changeVal} = this.props
        return (
            <fieldset>
                <legend>{title}</legend>
                {/* 调用父组件的changVal方法 根据传入的数据和类型改变另一个类型的状态 */}
                <input type = 'number' value = {temp} onChange = {changeVal.bind(null,type)} // 显示的值需要调用父组件的方法来决定
                />
            </fieldset>
        )
    }
}
export default TemperatureInput
