import './App.css';
import Message from './Message';
import { useState, useEffect } from 'react';

const myText = "My personal text in my first React App";

function App() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "unknown user") {
      setTimeout(() => setMessages((prevMessages) => [...prevMessages, {author: "bot", text: "new answer from bot"}]), 1500);
      }
  }, [messages]);

  const handleMessages = (author, text) => {
    const newMessagesList = [...messages];
    const newMessage = {
      author,
      text,
    }
    newMessagesList.push(newMessage);
    setMessages(newMessagesList);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleMessages("unknown user", value);
    setValue("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Message text={myText}></Message>
        <h3>Welcome to chat</h3>
        <form onSubmit={onSubmit} >
          <input className="message-input" value={value} onChange={handleChange} />
          <button className="message-send-btn" type="submit" onClick={handleMessages}>Send Message</button>
            <ul>
              {messages.map((message) => (
                <li>{message.author} : {message.text} </li>
              ))}
            </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
