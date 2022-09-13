import React, {Component} from 'react';
import './style.css'

class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAll = () => {
        this.props.clearAllTodoDone()
    }

    render() {
        const doneCount = this.props.todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll}
                           checked={doneCount === this.props.todos.length ? true : false}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span>
                    / 全部{this.props.todos.length}</span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;