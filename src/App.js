import './App.css';
import Message from './Message';
import { ChatList } from './Components/ChatList';
import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const myText = "This is my first React App";

function App() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

  const onSubmitMessage = (event) => {
    event.preventDefault();
    handleMessages("user", value, `mess-${Date.now()}`);
    setValue("");
  }

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "user") {
      setTimeout(() => setMessages((prevMessages) => [...prevMessages, {author: "bot", text: "An automatic answer from Bot", id: `mess-${Date.now()}`}]), 1500);
      }
  }, [messages]);

  useEffect(() => {
    inputRef.current.focus();
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <Message text={myText}></Message>
        <h3 className="App-subheader">Welcome to chat</h3>
      </header>
      <section className="messenger">
          <div className="chat-user-box">
            <ChatList list={[
              {
                name: "user 1",
                id: "1"
              },
              {
                name: "user 2",
                id: "2"
              },
              {
                name: "user 3",
                id: "3"
              },
              {
                name: "user 4",
                id: "4"
              }
            ]}
            />
          </div>
          <div classNambe="chat-message-box">
            <ul className="chat">
                {messages.map((message) => (
                  <li className="chat-message" key={message.id}>{message.author} : {message.text}</li>
                ))}
            </ul>
            <form onSubmit={onSubmitMessage} className="message-box">
                <Box className="message-input-box" sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
              <TextField fullWidth inputRef={inputRef} className="message-input" label="Message" id="fullWidth" value={value} onChange={handleChange} type="text" />
              </Box>
                <Button className="message-send-btn" variant="contained" endIcon={<SendIcon />} type="submit">Send</Button>
            </form>
          </div>
        </section>  
    </div>
  );
}

export default App;
