import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import '@fontsource/roboto';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <PostForm />
        <Posts />
      </Container>
    </div>
  );
}

export default App;
