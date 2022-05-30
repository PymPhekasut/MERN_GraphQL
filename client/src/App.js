import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <MenuBar />

          <Routes>
          //use V6 syntax to resolve this issue
            //Only login user can access to homepage
            <Route path="/" element={<AuthRoute />} >
              <Route path="/" element={<Home />} />
            </Route>

            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/posts/:postId' element={<SinglePost />} />

          </Routes>

        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
