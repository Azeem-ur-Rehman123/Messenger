import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import image from '../images/avatar.jpg';
import '../css/sidebar.css';
import ChatUsers from './ChatUsers';
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sidebar-header">
        <Avatar alt="Remy Sharp" src={image} />
        <div className="sidebar-header-right">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-chat">
        <ChatUsers />
        <ChatUsers />
        <ChatUsers />
        <ChatUsers />
        <ChatUsers />
        <ChatUsers />
        <ChatUsers />
      </div>
    </div>
  );
};

export default SideBar;
