import './Message.css';

function Message (props) {
  return (
    <h3 className="Message">Hello everyone, {props.text}</h3>
  );
}

export default Message;