import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import image from '../images/reciver.jpg';
import '../css/sidebarUsers.css';
const ChatUsers = () => {
  return (
    <div className="chat-users">
      <div className="avatar">
        <Avatar alt="Remy Sharp" src={image} />
      </div>
      <p>Name</p>
    </div>
  );
};

export default ChatUsers;
