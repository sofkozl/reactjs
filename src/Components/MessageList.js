import React from 'react';
import propTypes from 'prop-types';

export const MessageList = (props) => {
  return (
            <ul className="chat">
                {props.messages.map((message) => (
                  <li className="chat-message" key={message.id} {...message}>{message.author} : {message.text}</li>
                ))}
            </ul>
  );
};

MessageList.propTypes = {
  messages: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      text: propTypes.string,
      author: propTypes.string,
    })
  )
};

MessageList.defaultProps = {
  messages: []
};