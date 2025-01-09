import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1
}) => {
  const generatePageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

      const pages: (number | string)[] = [1];

      if (startPage > 2) {
        pages.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push('...');
      }

      pages.push(totalPages);

      return pages;
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`group flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105'
        }`}
      >
        <ChevronLeft
          className={`w-5 h-5 transition-transform ${
            currentPage === 1
              ? 'text-gray-400'
              : 'text-white group-hover:-translate-x-1'
          }`}
        />
      </button>

      {pages.map((page, index) =>
        typeof page === 'string' ? (
          <span key={index} className="px-3 py-2 text-gray-500">
            {page}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border rounded transition-all min-w-[48px] flex items-center justify-center ${
              page === currentPage
                ? 'text-white bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 bg-[length:200%] border border-transparent hover:bg-right hover:border-pink-500 hover:shadow-[0_0_10px_rgba(245,95,141,0.5)]'
                : 'bg-white text-pink-500 border border-pink-500 hover:bg-pink-100'
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`group flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105'
        }`}
      >
        <ChevronRight
          className={`w-5 h-5 transition-transform ${
            currentPage === totalPages
              ? 'text-gray-400'
              : 'text-white group-hover:translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default Pagination;
