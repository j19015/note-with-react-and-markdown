import './Sidebar.css';
import React from 'react';

// eslint-disable-next-line react/prop-types
function Sidebar({ onAddNote, notes, onDeleteNote }) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button type="button" onClick={onAddNote}>
          追加
        </button>
      </div>
      <div className="app-sidebar-notes">
        {
          // eslint-disable-next-line react/prop-types
          notes.map((note) => (
            <div className="app-sidebar-note" key={note.id}>
              <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button type="button" onClick={() => onDeleteNote(note.id)}>
                  削除
                </button>
              </div>
              <p>{note.content}</p>
              <small className="note-meta">
                最終更新日:
                {new Date(note.modDate).toLocaleDateString('ja-JP', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </small>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar;
