import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      title: '新しいノート',
      content: '新しいノートの内容です。',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };
  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
