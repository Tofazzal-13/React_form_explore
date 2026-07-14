import React from 'react';
import Bou from './Bou';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>My self</h3>
            <Bou name="Sanzida" asset={asset}></Bou>
        </div>
    );
};

export default Myself;