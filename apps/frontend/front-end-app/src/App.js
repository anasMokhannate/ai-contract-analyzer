import logo from './logo.svg';
import React from 'react';
import Navbar from './components/nav-bar/NavBar';
import FileUploader from './components/fileUploader/fileUploader';
import Body from './components/body/Body';
import './App.css';

function App() {
  return (
      <>
        <Navbar />
        
        <Body />
      </>
    );
}

export default App;
