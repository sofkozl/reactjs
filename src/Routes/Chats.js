import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Routes, Route } from 'react-router-dom';
import { ChatList } from '../Components/ChatList';
import { Messages } from '../Components/Messages';
import { CHATS } from '../Components/ChatCreate';


function Chats() {
    return (
      <div className="App">
        <section className="messenger">
            <div className="chat-user-box">
              <ChatList list={CHATS} />
            </div>
            <div className="chat-message-box">
              <Routes>
                <Route element={<Messages />} path="/chats/:chatId" />
              </Routes>
            </div>
        </section>
      </div>
  );
};

export default Chats;