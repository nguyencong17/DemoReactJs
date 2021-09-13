import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

Counter_DemoRedux.propTypes = {
    
};

function Counter_DemoRedux(props) {

    const dispatch = useDispatch();

    const count = useSelector(state => state.counter);

    const handleClickIncrease = () =>
    {
        const action = increase();
        dispatch(action);
    }
    const handleClickDecrease = () =>
    {
        const action = decrease();
        dispatch(action);

    }
    return (
        <div>
            <h3>Demo redux bằng Counter</h3>
            <button onClick={handleClickDecrease}>-</button>
            {count}
            <button onClick={handleClickIncrease}>+</button>
        </div>
    );
}

export default Counter_DemoRedux;