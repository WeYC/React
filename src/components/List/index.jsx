import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Item from "../Item";
import './style.css'

class List extends Component {

    static propsType = {
        // 对接收的props进行：类型、必要性的限制
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        return (
            <ul className="todo-main">
                {
                    this.props.todos.map((item) => {
                        return <Item key={item.id} {...item} updateTodo={this.props.updateTodo}
                                     deleteTodo={this.props.deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

export default List;