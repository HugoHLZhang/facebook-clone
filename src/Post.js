import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumnUpIcon from "@material-ui/icons/ThumbUp"
import AccountCircleIcon  from "@material-ui/icons/AccountCircle"
import    ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import  {  ExpandMoreOutlined } from "@material-ui/icons"
import    NearMeIcon  from '@material-ui/icons/NearMe';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>      
            <div className="post_options">
                <div className="post_option">
                    <ThumnUpIcon/>
                    <p>J'aime</p> 
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Commenter</p> 
                </div>
                <div className="post_option">
                    <NearMeIcon/>
                    <p>Partager</p> 
                </div>
                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/> 
                </div>
            </div>
        </div>
    )
}

export default Post
