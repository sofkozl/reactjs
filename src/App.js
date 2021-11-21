import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { Home } from './Routes/Home';
import { Profile } from './Routes/Profile';
import { Chats } from './Routes/Chats';
import { GistsList } from './Routes/Gist';
import { persistor, store } from './Store/store';


function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar className="ToolBar-box">
                  <Button to="/" component={Link} color="inherit">Home</Button>
                  <Button to="/profile" component={Link} color="inherit">Profile</Button>
                  <Button to="/chats" component={Link} color="inherit">Chats</Button>
                  <Button to="/gists" component={Link} color="inherit">Gists List</Button>
                </Toolbar>
              </AppBar>
            </Box>
            <Switch>
              <Route component={Chats} path="/chats" />
              <Route component={Profile} path="/profile" />
              <Route component={GistsList} path="/gists" />
              <Route component={Home} path="/" />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
