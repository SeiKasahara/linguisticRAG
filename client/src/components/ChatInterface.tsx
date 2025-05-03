import React from "react";

interface Message {
    id: string;
    text: string;
    isUser: boolean;
  }
  
  interface ChatInterfaceProps {
    messages: Message[];
    onSend: (text: string) => void;
  }
  
  const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSend }) => {
    const [input, setInput] = React.useState('');
  
    const handleSend = () => {
      if (input.trim()) {
        onSend(input);
        setInput('');
      }
    };
  
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto p-4 bg-white">
          {messages.map(msg => (
            <div key={msg.id} className={msg.isUser ? 'text-right' : 'text-left'}>
              <span className="inline-block p-2 bg-gray-200 rounded-lg mb-2">
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-100 flex">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none"
            placeholder="输入你的问题..."
          />
          <button onClick={handleSend} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            发送
          </button>
        </div>
      </div>
    );
  };
  
  export default ChatInterface;