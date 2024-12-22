import React from 'react';
import './App.css';  // Link to the custom CSS file

import VideoPlayer from './screens/VideoPlayer';
import Taskbar from './screens/Taskbar';
import Notifications from './screens/Notification';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="app-bar">
        <h2 className="app-title">Video Chat</h2>
      </header>
      <VideoPlayer />
      <Taskbar>
        <Notifications />
      </Taskbar>
    </div>
  );
};

export default App;
