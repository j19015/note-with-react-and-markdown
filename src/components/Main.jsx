import './Main.css';
import React from 'react';

function Main() {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="ノートの内容を記入" />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">タイトル</h1>
        <div className="markdown-preview">ノートの内容</div>
      </div>
    </div>
  );
}

export default Main;
