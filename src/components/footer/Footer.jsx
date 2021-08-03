import React, { useState } from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import Picker from 'emoji-picker-react';
import '../css/footer.css';

const Footer = () => {
  const [chosenEmoji, setChosenEmoji] = useState('');
  const [cancel, setCancel] = useState(false);
  const [text, setText] = useState('');

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);

    if (chosenEmoji.emoji !== undefined) setText(text + chosenEmoji.emoji);
  };
  return (
    <div className="chat-footer">
      {cancel === true ? (
        <>
          <IconButton onClick={() => setCancel(false)}>
            <CancelIcon />
          </IconButton>
          <div className="icon-picker">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        </>
      ) : null}

      <IconButton onClick={() => setCancel(true)}>
        <EmojiEmotionsIcon />
      </IconButton>
      <form>
        <input
          type="txt"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <MicIcon />
    </div>
  );
};

export default Footer;
