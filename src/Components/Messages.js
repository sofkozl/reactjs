import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
import { useDispatch, useSelector } from 'react-redux';
import { getChatMessagesById } from '../Store/Messages/Selectors';
import { checkChatById } from '../Store/Chats/Selectors';
import { addMessage } from '../Store/Messages/Actions';


export const Messages = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(getChatMessagesById(chatId));
  const checkChat = useSelector(checkChatById(chatId));
  
  const handleMessages = (author, text) => {
    const newMessage = {
      author,
      text
    };
    dispatch(addMessage(newMessage, chatId));
  };

  const onSendMessage= (value) => {
    handleMessages("user", value);
  };

  useEffect(() => {
    if (!messages || messages.length === 0) {
      return;
    }

    const tail = messages[messages.length - 1];
    if (tail.author === 'bot') {
      return;
    }

    handleMessages('bot', 'An automatic reply');
  
  }, [messages]);

  if (!checkChat) {
    return <Redirect to='/chats' />;
  }

  return (
            <>
              <MessageList messages={messages} />
              <MessageForm onSend={onSendMessage} />
            </>
  );
};