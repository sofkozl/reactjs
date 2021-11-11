import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Routes/Home';
import { Profile } from './Routes/Profile';
import { Chats } from './Routes/Chats';
import { Provider } from "react-redux";
import { store } from './Store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar className="ToolBar-box">
                <Button to="/" component={Link} color="inherit">Home</Button>
                <Button to="/profile" component={Link} color="inherit">Profile</Button>
                <Button to="/chats" component={Link} color="inherit">Chats</Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Routes>
            <Route element={<Chats />} path="/chats" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Home />} path="/" />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
