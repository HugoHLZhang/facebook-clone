import React, { useState } from 'react';
import "./MessageSender.css";
import{Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import {useStateValue} from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";


function MessageSender() {
    const [{user},dispatch] = useStateValue();
    const[input, setInput] = useState("");
    const[imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value ={input} onChange={(e) => setInput(e.target.value)} className="messageSender_input" placeholder={`Que voulez-vous dire, ${user.displayName} ?`} />

                    <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="image URL" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Vidéo en direct</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Vidéo</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Humeur/Activité</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
