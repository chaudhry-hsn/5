
import React, { useState } from 'react';
import { AppMode } from './types';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import ImageView from './components/ImageView';
import VideoView from './components/VideoView';
import LiveView from './components/LiveView';

const App: React.FC = () => {
  const [activeMode, setActiveMode] = useState<AppMode>(AppMode.CHAT);

  const renderContent = () => {
    switch (activeMode) {
      case AppMode.CHAT:
        return <ChatView />;
      case AppMode.IMAGE:
        return <ImageView />;
      case AppMode.VIDEO:
        return <VideoView />;
      case AppMode.LIVE:
        return <LiveView />;
      default:
        return <ChatView />;
    }
  };

  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-100 overflow-hidden font-sans">
      <Sidebar activeMode={activeMode} onModeChange={setActiveMode} />
      <main className="flex-1 flex flex-col relative overflow-hidden bg-zinc-950/50">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
