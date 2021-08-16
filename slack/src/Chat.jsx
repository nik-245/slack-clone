import React from 'react'
import "./Chat.css";
import { useParams } from 'react-router';
import InfoIcon from '@material-ui/icons/Info';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Chat = () => {
    const {roomId} = useParams()
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerleft">
                   <h4 className="chat__channelname">
                       <strong># genrally</strong>
                       <StarOutlineIcon className="MuiSvgIcon-root" />
                   </h4>
                </div>
                <div className="chat__headerright">
                    <p>
                        <InfoIcon className="MuiSvgIcon-root"/> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
