import React, {Component} from 'react';
import Header from "../Header";
import List from "../List";
import Footer from "../Footer";
import './style.css'

class Main extends Component {
    state = {
        todos: [
            {id: 1, name: "吃饭", done: false},
            {id: 2, name: "睡觉", done: true},
            {id: 3, name: "打代码", done: false},
            {id: 4, name: "学习", done: true},
        ]
    }

    addTodo = (value) => {
        const newTodos = [value, ...this.state.todos]
        this.setState({todos: newTodos})
    }

    updateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return {...item, done}
            } else {
                return item
            }
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((item) => {
            return item.id !== id
        })

        this.setState({todos: newTodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((itme) => {
            return {...itme, done}
        })

        this.setState({todos: newTodos})
    }

    clearAllTodoDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((item) => {
            return !item.done
        })

        this.setState({todos: newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllTodoDone={this.clearAllTodoDone}/>
                </div>
            </div>
        );
    }
}

export default Main;