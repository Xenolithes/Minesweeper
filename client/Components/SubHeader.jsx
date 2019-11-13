import React from 'react';
import BombCounter from './BombCounter.jsx'
import FlagButton from './FlagButton.jsx'
import Timer from './Timer.jsx'


const SubHeader = () =>{

    return (
        <div className="columns">
            <div className="column">
                <BombCounter />
            </div>
            <div className="column">
                <FlagButton />
            </div>
            <div className="column">
                // <Timer />
            </div>

        </div>
    )
}

export default SubHeader