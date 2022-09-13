import React, {Component} from 'react';
import './style.css'
import PropTypes from "prop-types";

class Item extends Component {

    static propsType = {
        // 对接收的props进行：类型、必要性的限制
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        if (window.confirm("确定删除吗？")) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        return (
            <li style={{backgroundColor: this.state.mouse ? "#ddd" : ""}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: this.state.mouse ? "" : "none"}} onClick={() =>
                    this.handleDelete(id)
                }>删除
                </button>
            </li>
        );
    }
}

export default Item;