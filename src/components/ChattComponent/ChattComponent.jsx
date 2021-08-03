import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import image from '../images/reciver.jpg';
import '../css/chatt.css';
import Footer from '../footer/Footer';
const ChattComponent = () => {
  return (
    <div className="chat">
      <div className="chatt-header">
        <Avatar alt="Remy Sharp" src={image} />
        <div className="chatt-header-Info">
          <h3>Azeem</h3>
          <p>(Last seen...)</p>
        </div>

        <div className="chatt-header-right">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className="chat-message">
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat-message chat-reciver">
          This is a message
          <span className="chat-time">{new Date().toUTCString()}</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ChattComponent;
