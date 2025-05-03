import SearchBar from './SearchBar';

const Header: React.FC = () => (
  <header className="flex items-center justify-between p-4 bg-white shadow-md">
    <div className="text-2xl font-bold">LinguaRAG</div>
    <SearchBar />
    <div className="flex items-center space-x-4">
      <button className="p-2 rounded-lg hover:bg-gray-100">🔔</button>
      <img src="/avatar.png" alt="avatar" className="w-10 h-10 rounded-full" />
    </div>
  </header>
);

export default Header;