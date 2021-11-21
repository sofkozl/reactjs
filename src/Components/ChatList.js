import React from 'react';
import propTypes from 'prop-types';
import { List } from '@mui/material';
import { Chat } from './Chat';


export const ChatList = ({list, onDelete}) => {

  return (
    <List>
      {list.map((chat) => (
        <Chat onClick={() => onDelete(chat.id)} key={chat.id} {...chat} />
      ))}
    </List>
  );
};

ChatList.propTypes = {
  list: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string,
  }))
}