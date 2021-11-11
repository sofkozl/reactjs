import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
import { CHATS } from './ChatCreate';


export const Messages = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  
  const handleMessages = (author, text, id) => {
    const newMessages = [...messages];
    const newMessage = {
      author,
      text,
      id,
    };
    newMessages.push(newMessage);
    setMessages(newMessages);
  };

  const onSendMessage= (value) => {
    handleMessages("user", value, `mess-${Date.now()}`);
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "user") {
      setTimeout(() => setMessages((prevMessages) => [...prevMessages, {author: "bot", text: "An automatic answer from Bot", id: `mess-${Date.now()}`}]), 1500);
      }
  }, [messages]);

  if (!CHATS.find(({ id }) => id === chatId)) {
    return <Navigate to="/chats" />;
  }

  return (
            <>
              <MessageList messages={messages} />
              <MessageForm onSend={onSendMessage} />
            </>
  );
};