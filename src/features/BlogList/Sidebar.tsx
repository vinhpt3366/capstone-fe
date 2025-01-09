import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6 h-[700px] overflow-y-auto">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Danh mục</h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Công nghệ
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Lập trình
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Thiết kế
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Marketing
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Bài viết nổi bật
        </h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <img
              src="/images/pic2_1.jpg"
              alt="Bài viết 1"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <a
                href="#"
                className="text-gray-800 font-medium hover:text-pink-500 transition-colors line-clamp-2"
              >
                Học React từ cơ bản đến nâng cao
              </a>
              <p className="text-sm text-gray-500">05/01/2025</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img
              src="/images/pic2.jpg"
              alt="Bài viết 2"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <a
                href="#"
                className="text-gray-800 font-medium hover:text-pink-500 transition-colors line-clamp-2"
              >
                Tailwind CSS: Tương lai của thiết kế web
              </a>
              <p className="text-sm text-gray-500">04/01/2025</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img
              src="/images/pic2.jpg"
              alt="Bài viết 3"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <a
                href="#"
                className="text-gray-800 font-medium hover:text-pink-500 transition-colors line-clamp-2"
              >
                Node.js: Xây dựng ứng dụng server-side mạnh mẽ
              </a>
              <p className="text-sm text-gray-500">03/01/2025</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Thẻ Tags</h3>
        <div className="flex flex-wrap gap-2">
          <a
            href="#"
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-pink-500 hover:text-white transition-colors"
          >
            React
          </a>
          <a
            href="#"
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-pink-500 hover:text-white transition-colors"
          >
            JavaScript
          </a>
          <a
            href="#"
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-pink-500 hover:text-white transition-colors"
          >
            CSS
          </a>
          <a
            href="#"
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-pink-500 hover:text-white transition-colors"
          >
            Web Design
          </a>
          <a
            href="#"
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-pink-500 hover:text-white transition-colors"
          >
            Node.js
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
