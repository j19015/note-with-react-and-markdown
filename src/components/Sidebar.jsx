import './Sidebar.css';
import React from 'react';

// eslint-disable-next-line react/prop-types
function Sidebar({
  // eslint-disable-next-line react/prop-types
  onAddNote,
  // eslint-disable-next-line react/prop-types
  notes,
  // eslint-disable-next-line react/prop-types
  onDeleteNote,
  // eslint-disable-next-line react/prop-types
  activeNote,
  // eslint-disable-next-line react/prop-types
  setActiveNote,
}) {
  // eslint-disable-next-line react/prop-types
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

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
          sortedNotes.map((note) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              className={`app-sidebar-not ${note.id === activeNote && 'active'}`}
              key={note.id}
              onClick={() => setActiveNote(note.id)}
            >
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
