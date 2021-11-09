import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Routes/Home';
import { Profile } from './Routes/Profile';
import Chats from './Routes/Chats';

function App() {
  return (
    <div>
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
          <Route element={<Home />} exact path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
