import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const Chat = ({name, id, onClick}) => {
  return (
    <ListItem component={Link} to={`/chats/${id}`}>
      <ListItemText>{name}</ListItemText>
      <IconButton onClick={onClick} aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

Chat.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  onClick: propTypes.func
}