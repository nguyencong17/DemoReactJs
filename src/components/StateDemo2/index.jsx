import React, { useState } from 'react';
import PropTypes from 'prop-types';

QuantityUpDown.propTypes = {
    
};

function QuantityUpDown(props) {
    const [quantity,setQuanity] = useState(1);
    return (
        <div>
            <button onClick={()=>setQuanity(x => x-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuanity(x => x+1)}>+</button>
        </div>
    );
}

export default QuantityUpDown;