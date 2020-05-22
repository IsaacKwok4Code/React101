import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/HeaderComponents";
import Note from "./components/NoteComponents";
import Footer from "./components/FooterComponents";
import NoteData from "./data/NoteData"

function App() {
  return (
    <div className="App">
      <Header />
      {NoteData.map(noteData => (
        <Note 
          title={noteData.title}
          content={noteData.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
