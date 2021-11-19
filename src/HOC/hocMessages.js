import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { automaticMessage } from '../Store/Messages/Actions';
import { checkChatById } from '../Store/Chats/Selectors';
import { getChatMessagesById } from '../Store/Messages/Selectors';

export const hocMessages = (Component) => {
  return (props) => {
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const messages = useSelector(getChatMessagesById(chatId));
    const checkChat = useSelector(checkChatById(chatId));

    const onSendMessage = (text) => {
      dispatch(automaticMessage("user", text, chatId));
    };

    return (<Component
    {...props}
    messages={messages}
    checkChat={checkChat}
    onSendMessage={onSendMessage}
    />)
  }
}