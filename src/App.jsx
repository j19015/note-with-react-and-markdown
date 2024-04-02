import './App.css';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import uuid from 'react-uuid';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: '新しいノートの内容です。',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const getActiveNote = notes.find((note) => note.id === activeNote);

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote} />
    </div>
  );
}

export default App;
