import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Chat = ({name, id}) => {
  return (
    <ListItem component={Link} to={`/chats/${id}`}>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  );
};

Chat.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
}