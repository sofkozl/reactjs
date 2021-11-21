import { Switch, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { ChatList } from '../Components/ChatList';
import { Messages } from './Messages';
import hocChats from '../HOC/hocChats';

export const ChatsRender = () => ({chats, onCreate, onDelete}) => {
  
    return (
      <div className="App">
        <section className="messenger">
            <div className="chat-user-box">
              <ChatList onDelete={onDelete} list={chats}/>
              <Button onClick={onCreate}>Create chat</Button>
            </div>
            <div className="chat-message-box">
              <Switch>
                <Route component={Messages} path="/chats/:chatId"/>
              </Switch>
            </div>
        </section>
      </div>
  );
};

export const Chats = hocChats(ChatsRender);