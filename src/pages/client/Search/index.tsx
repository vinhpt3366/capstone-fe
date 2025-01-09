import React, { useEffect, useState } from 'react';

import CourseCard from '@/features/CourseCard';
import { useSearchParams } from 'react-router-dom';
import { useCourseStore } from './store';

const SearchCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResults, loading, error, searchCourses } = useCourseStore();

  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');

  useEffect(() => {
    if (term) {
      setSearchTerm(term);
      searchCourses(term);
    }
  }, [term]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4 font-medium">{error}</div>
      )}

      {!loading && !error && searchResults.length === 0 && searchTerm && (
        <div className="text-gray-600 text-center py-4">
          Không tìm thấy khóa học nào
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {searchResults.map((course, index) => (
          <div key={index} className="flex justify-center">
            <CourseCard
              id={course.maKhoaHoc}
              title={course.tenKhoaHoc}
              instructor={course.nguoiTao.hoTen}
              originalPrice={1999000}
              discountPrice={599000}
              rating={4.8}
              totalRatings={course.luotXem}
              studentCount={course.soLuongHocVien.toString()}
              category={course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
              imageUrl={
                course.hinhAnh ||
                'https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg'
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCourses;
