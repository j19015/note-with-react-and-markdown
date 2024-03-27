import './Sidebar.css';
import React from 'react';

function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button type="button">追加</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>タイトル</strong>
            <button type="button">削除</button>
          </div>
          <p>ノートの内容です。</p>
          <small className="note-meta">最終更新日: ********</small>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
