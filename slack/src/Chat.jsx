import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router";
import InfoIcon from "@material-ui/icons/Info";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import db from "./firebase";
import Massage from "./Massage";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { roomId } = useParams();
  const [roomdetails, setroomdetails] = useState(null);
  const [roomMassages, setroomMassages] = useState([]);
  // strong name chnage dynamicly using useefect
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setroomdetails(snapshot.data());
        });
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("massages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setroomMassages(snapshot.docs.map((doc) => doc.data()))
      );
      console.log('====================================');
      console.log(roomId);
      console.log('====================================');
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerleft">
          <h4 className="chat__channelname">
            <strong># {roomdetails?.name}</strong> 
            {/* in hear the ? is called optional chaining from es6 or es7 and we can also do nested optional chaining */}
            <StarOutlineIcon className="MuiSvgIcon-root" />
          </h4>
        </div>
        <div className="chat__headerright">
          <p>
            <InfoIcon className="MuiSvgIcon-root" /> Details
          </p>
        </div>
      </div>
      <div className="chat__massages">
          {/* massages component are put hear with need to props*/}
          {roomMassages.map(({massage , timestamp , user , userimage}) =>(
             <Massage 
               massage = {massage}
               timestamp = {timestamp}
               user = {user}
               userImage ={userimage}
             />
          ))}
      </div>
      <ChatInput channelName={roomdetails?.name} channelId={roomId}/>
    </div>
  );
};

export default Chat;
