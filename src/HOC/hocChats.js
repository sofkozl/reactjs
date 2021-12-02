import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { createChat } from '../Helpers/Helpers';
import { getChatList } from '../Store/Chats/Selectors';
import { deleteChatWithThunk, 
  addChatWithThunk, 
  onTrackAddChatWithThunk,
   offTrackAddChatWithThunk, 
   onTrackDeleteChatWithThunk, 
   offTrackDeleteChatWithThunk } from '../Store/Chats/Actions';
import { deleteMessagesWithThunk } from '../Store/Messages/Actions';

const hocChats = (Component) => {

  return (props) => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback( () => {
      dispatch(addChatWithThunk(createChat('chat sample')))
    }, []);

    const onDelete = useCallback( (chatId) => {
      dispatch(deleteChatWithThunk(chatId));
      dispatch(deleteMessagesWithThunk(chatId));
    }, []);

    useEffect(() => {
      dispatch(onTrackAddChatWithThunk);
      dispatch(onTrackDeleteChatWithThunk);
        
        return () => {
          dispatch(offTrackAddChatWithThunk);
          dispatch(offTrackDeleteChatWithThunk);
        }
    }, [])

    return <Component
      {...props}
      chats={chats}
      onCreate={onCreate}
      onDelete={onDelete} />
  }
};

export default hocChats;