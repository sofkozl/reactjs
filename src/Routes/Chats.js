import React, { useCallback, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { ChatList } from '../Components/ChatList';
import { Messages } from '../Components/Messages';
import { getChatList } from '../Store/Chats/Selectors';
import { addChat, deleteChat, setChat } from '../Store/Chats/Actions';
import { nanoid } from 'nanoid';
import { CHATS } from '../Components/ChatCreate';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessages } from '../Store/Messages/Actions';


export const Chats = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback( () => {
      dispatch(addChat( {
        id: nanoid(),
        name: 'chatName',
      }))
    }, []);

    const onDelete = (chatId) => {
      dispatch(deleteChat(chatId));
      dispatch(deleteMessages(chatId));
    };

    useEffect(() => {
      dispatch(setChat(CHATS))
    }, []);

    return (
      <div className="App">
        <section className="messenger">
            <div className="chat-user-box">
              <ChatList onDelete={onDelete} list={chats} />
              <Button onClick={onCreate}>Create chat</Button>
            </div>
            <div className="chat-message-box">
              <Switch>
                <Route component={Messages} path="/chats/:chatId" />
              </Switch>
            </div>
        </section>
      </div>
  );
};