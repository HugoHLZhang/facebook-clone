import React from 'react'
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import {useStateValue} from "./StateProvider";
import { ExpandMoreOutlined } from '@material-ui/icons';
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Sidebar() {
    const [{user},dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 - Centre d'information"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Amis"/>
            <SidebarRow Icon={ChatIcon} title="Messages"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Watch"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Voir plus"/>
        </div>
    )
}

export default Sidebar
