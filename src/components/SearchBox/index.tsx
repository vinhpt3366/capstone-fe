import { Search } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?term=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const baseClasses =
    'flex items-center bg-gray-100 rounded-lg px-4 py-2 w-64 transition-all duration-500 border border-transparent hover:shadow-[0_0_10px_rgba(245,95,141,0.5)] hover:border-pink-500 focus-within:shadow-[0_0_10px_rgba(245,95,141,0.5)] focus-within:border-pink-500';

  return (
    <form onSubmit={handleSubmit} className={`${baseClasses} ${className}`}>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
      />
      <button
        type="submit"
        className="text-gray-500 hover:text-pink-500 transition-colors"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
};

export default SearchBox;
