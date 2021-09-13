import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    const initTodoList = [
        {
            id:1,
            title: 'Eat',
            status: 'new'
        },
        {
            id:2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id:3,
            title: 'Code',
            status: 'new'
        },
        {
            id:4,
            title: 'Run',
            status: 'new'
        },
        {
            id:5,
            title: 'Swimming',
            status: 'completed'
        },
        {
            id:6,
            title: 'Shopping',
            status: 'completed'
        },
    ];
    const [todoList,setTodoList] = useState(initTodoList);
    const [filterStatus,setFilterStatus] = useState('all');
    const handleTodoClick = (todo, index) => {
        // clone current array to the new array
        const newTodoList = [...todoList];
        console.log(todo,index);
        //toggle state
        newTodoList[index] = {
            ...newTodoList[index], // lấy lại toàn bộ các giá trị 
            status: newTodoList[index].status === 'new' ? 'completed' : 'new', // chỉ thay đổi status
        };
        //update state
        setTodoList(newTodoList);
    }
    const handleShowAll = () => {
        setFilterStatus('all');
    }
    const handleShowCompleted = () => {
        setFilterStatus('completed');
    }
    const handleShowNew = () => {
        setFilterStatus('new');
    }
    // bộ lọc theo status
    const renderFilter = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)

    const handleTodoFormSubmit = (values) => {
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };
        const newTodoList = [...todoList,newTodo];
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>What to do ?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <h3>TO DO LIST</h3>
            <TodoList todoList={renderFilter} onTodoClick={handleTodoClick}/>

            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show Completed</button>
            <button onClick={handleShowNew}>Show New</button>
        </div>
    );
}

export default TodoFeatures;