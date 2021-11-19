import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getChatList } from '../Store/Chats/Selectors';
import { addChat, deleteChat } from '../Store/Chats/Actions';
import { deleteMessages } from '../Store/Messages/Actions';
import { createChat } from '../Helpers/Helpers';

export const hocChats = (Component) => {
  return (props) => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback( () => {
      dispatch(addChat(createChat('chat name')))
    }, []);

    const onDelete = useCallback( (chatId) => {
      dispatch(deleteChat(chatId));
      dispatch(deleteMessages(chatId));
    }, []);

    return (<Component
      {...props}
      chats={chats}
      onCreate={onCreate}
      onDelete={onDelete}
    />);
  }
}