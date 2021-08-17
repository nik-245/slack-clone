import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                className="header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}
                />
                {/* avtars for loggin user  */}
                <AccessTimeIcon className="MuiSvhIcon-root"/>
                {/* time icon */}
            </div>
            <div className="header__serch">
                {/* search icon */}
                <SearchIcon />
                {/* input */}
                <input type="text" placeholder="seach chenal" />
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon className="MuiSvhIcon-root" />
            </div>
        </div>
    )
}

export default Header
