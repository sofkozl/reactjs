import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { Button, Box, TextField } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';

export const MessageForm = (props) => {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const resetForm = () => {
    setValue('');
  }

  const onSubmitMessage = (event) => {
    event.preventDefault();
    props.onSend(value);
    resetForm();
  }

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (

            <form onSubmit={onSubmitMessage} className="message-box">
                <Box className="message-input-box" sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
              <TextField fullWidth inputRef={inputRef} className="message-input" label="Message" id="fullWidth" value={value} onChange={onChangeMessageInput} type="text" />
              </Box>
                <Button className="message-send-btn" variant="contained" endIcon={<SendIcon />} type="submit">Send</Button>
            </form>
  );
};

MessageForm.propTypes = {
  onSend: propTypes.func
}
