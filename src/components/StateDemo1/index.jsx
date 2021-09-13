import React, { useState } from 'react';
import PropTypes from 'prop-types';

YouOrMe.propTypes = {
    
};

function YouOrMe(props) {
    const [person,setPerson] = useState('AI DEP ZAI');
    return (
        <div>
            <h2>{person}</h2>
            <button onClick={()=>setPerson('Anh Cong Dz')}>Cong Boss</button>
            <button onClick={()=>setPerson('Thao Kho Tinh')}>Thao Nguyen</button>
        </div>
    );
}

export default YouOrMe;