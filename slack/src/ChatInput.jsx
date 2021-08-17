import React , {useState } from 'react'
import "./ChatInput.css";
import { Button } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import {useStateValue} from "./StateProvider";

const ChatInput = ({channelName , channelId}) => {
    const [{user}] = useStateValue();
    const [input, setinput] = useState('');
    const sendMassage = (e)=>{
         e.preventDefault();
         console.log(channelId);
         if(channelId){
             db.collection('rooms').doc(channelId).collection('massages').add({
                massage : input ,
                 timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                 user : user.displayName ,
                 userimage : user.photoURL,

             })
         }
         setinput('');
    }
    return (
        <div className="chatinput">
            <form>
                <input 
                
                placeholder={`Message #${channelName}`} 
                value={input}
                onChange={e=>setinput(e.target.value) }
                />
                <Button disabled={!input} type="submit" onClick={sendMassage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput;