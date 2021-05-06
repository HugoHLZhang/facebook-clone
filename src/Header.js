import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {

    

    return (
        <div className="header">

            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"/>
            </div>

            <div className="header_input">
                <SearchIcon/>
                <input placeholder="Rechercher sur Facebook" type="text"/>
            </div>

            <div className="header_middle">
               <div className="header_option header_option-active">
                   <HomeIcon fontSize="large"/>
               </div>
               <div className="header_option">
                   <FlagIcon fontSize="large"/>
               </div>
               <div className="header_option">
                   <SubscriptionsIcon fontSize="large"/>
               </div>
               <div className="header_option">
                   <StorefrontIcon fontSize="large"/>
               </div>
               <div className="header_option">
                   <GroupIcon fontSize="large"/>
               </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar/>
                    <h4>Hugo</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
