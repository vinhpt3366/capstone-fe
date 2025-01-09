import React from 'react';
import { SearchX } from 'lucide-react';

export const CourseNotFound: React.FC = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
    <SearchX className="w-16 h-16 text-gray-400 mb-4" />
    <h1 className="text-2xl font-semibold text-gray-800 mb-2">
      Không tìm thấy thông tin khóa học
    </h1>
    <p className="text-gray-600 text-center max-w-md">
      Khóa học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Vui lòng kiểm tra
      lại đường dẫn hoặc quay lại trang chủ.
    </p>
    <button
      onClick={() => (window.location.href = '/')}
      className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Quay lại trang chủ
    </button>
  </div>
);
