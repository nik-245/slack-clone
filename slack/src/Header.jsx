import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                className="header__avatar"
                alt="user's name"
                src=""
                />
                {/* avtars for loggin user  */}
                <AccessTimeIcon />
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
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
