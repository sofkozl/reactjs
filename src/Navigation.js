import React, { useEffect } from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Home } from './Routes/Home';
import { Profile } from './Routes/Profile';
import { Chats } from './Routes/Chats';
import { News } from './Routes/News';
import { Login } from './Routes/Login';
import { Signup } from './Routes/Signup';
import { persistor } from './Store/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PrivateRoute from './HOC/PrivateRoute';
import PublicRoute from './HOC/PublicRoute';
import { auth } from './Services/Firebase';
import { getIsAuth, initAuth } from './Store/User/Reducer'

export const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuth);
  }, []);

  return (
    <>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar className="ToolBar-box">
                  <Button to="/" component={Link} color="inherit">Home</Button>
                  <Button to="/news" component={Link} color="inherit">News</Button>
                  <Button to="/profile" component={Link} color="inherit">Profile</Button>
                  <Button to="/chats" component={Link} color="inherit">Chats</Button>
                  <Button to="/login" component={Link} color="inherit">Login</Button>
                  <Button to="/signup" component={Link} color="inherit">Sign Up</Button>
                  <Button onClick={() => {auth.signOut();}} color="inherit">Log out</Button>
                </Toolbar>
              </AppBar>
            </Box>
            <Switch>
              <PrivateRoute authenticated={isAuth} path="/chats/:chatId?">
                <Chats />
              </PrivateRoute>
              <PrivateRoute authenticated={isAuth} path="/profile">
                <Profile />
              </PrivateRoute>
              <PublicRoute authenticated={isAuth} path="/news">
                <News />
              </PublicRoute>
              <PublicRoute authenticated={isAuth} path="/login">
                <Login />
              </PublicRoute>
              <PublicRoute authenticated={isAuth} path="/signup">
                <Signup />
              </PublicRoute>
              <PublicRoute authenticated={isAuth} exact path="/">
                <Home />
              </PublicRoute>
            </Switch>
          </BrowserRouter>
        </PersistGate>
    </>
  );
};