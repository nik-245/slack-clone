import React from "react";
import "./SidebarOption.css";
import {useHistory} from "react-router-dom";
import db from "./firebase";

const SidebarOption = ({ Icon, title ,id, addChannleOption}) => {
  const history = useHistory();
  
  const selectChannel = ()=>{
    if(id){
      history.push(`/room/${id}`);
    }else{
      history.push(title)
    }
  }

  const addChannel = ()=>{
    const channelName = prompt('Enter Channel Name');

    if (channelName) {
      db.collection('rooms').add({
        name : channelName
      })
    }
  }

  return (
    <div 
      className="sidebaroption" 
      onClick={addChannleOption ? addChannel : selectChannel }
    >
      {Icon && <Icon className="sidebaroption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption_channal">
          <span className="sidebaroption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
