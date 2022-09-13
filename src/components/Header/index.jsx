import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {nanoid} from "nanoid";
import './style.css'

class Header extends Component {
    static propsType = {
        // 对接收的props进行：类型、必要性的限制
        addTodo:PropTypes.func.isRequired
    }
    handleKeUp = (event) => {
        const {keyCode, target} = event
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert("输入内容不能为空")
        } else {
            const todoObj = {id: nanoid(), name: target.value, done: false}
            this.props.addTodo(todoObj)
            target.valu = ""
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;