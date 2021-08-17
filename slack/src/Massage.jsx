import React from 'react';
import "./Massage.css";

const Massage = ({massage , timestamp , user , userImage }) => {
    return (
        <div className="massage">
            <img src={userImage} alt="" />
            <div className="massage__info">
                <h4>
                {user} 
                <span className="massage__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{massage && massage}</p>
            </div>
        </div>
    )
}

export default Massage
