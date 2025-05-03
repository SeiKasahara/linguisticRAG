import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import DocumentPage from './pages/Document';
import Chat from './pages/Chat';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">

        <Header />
        <div className="flex flex-1 overflow-hidden">

          <Sidebar />

          <main className="flex-1 overflow-auto p-4 bg-gray-100">
            <Routes>

              <Route path="/" element={<Home />} />

              {/* <Route path="/browse" element={<Browse />} />

              <Route path="/document/:id" element={<DocumentPage />} />

              <Route path="/chat" element={<Chat />} />

              <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App
