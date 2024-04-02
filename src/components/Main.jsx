/* eslint-disable react/prop-types */
import './Main.css';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Markdown from 'react-markdown';
// eslint-disable-next-line react/prop-types
function Main({ activeNote, onUpdateNote }) {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote('title', e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノートの内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote('content', e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <Markdown className="markdown-preview">{activeNote.content}</Markdown>
      </div>
    </div>
  );
}

export default Main;
