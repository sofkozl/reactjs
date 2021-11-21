import { Redirect } from 'react-router-dom';
import { MessageList } from '../Components/MessageList';
import { MessageForm } from '../Components/MessageForm';
import hocMessages from '../HOC/hocMessages';

export const MessagesRender = ({messages, checkChat, onSendMessage,}) => {

  if (!checkChat) {
    return <Redirect to='/chats'/>;
  }
  
  return (
      <>
        <MessageList messages={messages} />
        <MessageForm onSendMessage={onSendMessage} />
      </>
  );  
};

export const Messages = hocMessages(MessagesRender);