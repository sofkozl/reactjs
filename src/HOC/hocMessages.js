import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithThunk, offTrackAddMessageWithThunk, offTrackDeleteMessagesWithThunk, onTrackAddMessageWithThunk, onTrackDeleteMessagesWithThunk } from '../Store/Messages/Actions';
import { checkChatById } from '../Store/Chats/Selectors';
import { getChatMessagesListById } from '../Store/Messages/Selectors';
import { createMessage } from "../Helpers/Helpers";
import { auth } from "../Services/Firebase";
import { useEffect } from "react";

const hocMessages = (Component) => {

  return (props) => {
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const user = auth.currentUser;
    const messages = useSelector(getChatMessagesListById(chatId));
    const checkChat = useSelector(checkChatById(chatId));

    const onSendMessage = (text) => {
      const message = createMessage(user.uid, text)
      dispatch(addMessageWithThunk(message, chatId));
    };

    useEffect(() => {
      dispatch(onTrackAddMessageWithThunk(chatId));
      dispatch(onTrackDeleteMessagesWithThunk(chatId));
        
        return () => {
          dispatch(offTrackAddMessageWithThunk(chatId));
          dispatch(offTrackDeleteMessagesWithThunk(chatId));
        }
    }, [chatId]);

    return <Component
    {...props}
    messages={messages}
    checkChat={checkChat}
    onSendMessage={onSendMessage} />
  }
}

export default hocMessages;