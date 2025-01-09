import React from 'react';
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';

interface BlogCardProps {
  options: {
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
    link: string;
    views?: number;
    likes?: number;
    comments?: number;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ options }) => {
  const {
    title,
    description,
    image,
    date,
    author,
    link,
    views = 0,
    likes = 0,
    comments = 0
  } = options;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full min-h-[400px]">
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-3 py-1 rounded-lg">
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-bold text-gray-800 hover:text-pink-500 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">By {author}</p>
        <p className="text-gray-600 mt-3 text-sm line-clamp-3 flex-grow">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 flex items-center justify-between overflow-hidden">
        {/* Icons */}
        <div
          className={`flex items-center space-x-4 text-gray-500 text-sm overflow-hidden flex-shrink truncate`}
        >
          <div className="flex items-center space-x-1">
            <FaEye className="text-gray-400" />
            <span>{views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaHeart className="text-gray-400" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaComment className="text-gray-400" />
            <span>{comments}</span>
          </div>
        </div>

        <a
          href={link}
          className="text-pink-500 font-medium text-sm hover:underline whitespace-nowrap flex-shrink-0"
        >
          Chi tiết →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
