import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss'
TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) { // 2 props truyền từ thằng cha xuống
    const handleTodoClick = (todo, index) => {
        if(!onTodoClick) return; // kiểm tra chắc chắn hàm onTodoClick đã truyền xuống chưa
        onTodoClick(todo, index);
    } 
    return (
        <ul className='todoList'>
            {todoList.map((todo,index) => (
            <li 
            key={todo.id}
            className={classnames({
                'todo-item' : true,
                completed: todo.status ==='completed'
            })}
            onClick={()=> handleTodoClick(todo,index)}
            >
            {todo.title}
            </li>
            ))}
        </ul>
    );
}

export default TodoList;