import React, { useEffect } from 'react';
import { useCatalogueActions, useCatalogueSelectors } from './store';
import { useSearchParams } from 'react-router-dom';
import Button from '@/components/Button/Button';
import CourseCard from '@/features/CourseCard';
import { Tag } from 'lucide-react';

const Catalogue: React.FC = () => {
  const { displayedCourses, isLoading, hasMore } = useCatalogueSelectors();
  const { fetchCoursesByCategory, loadMore } = useCatalogueActions();

  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('id');

  useEffect(() => {
    if (categoryId) {
      fetchCoursesByCategory(categoryId);
    }
  }, [categoryId, fetchCoursesByCategory]);

  if (isLoading && displayedCourses.length === 0) return null;

  const displayCategory = (string: string | null) => {
    switch (string?.toLowerCase()) {
      case 'backend':
        return 'Back-End';
      case 'design':
        return 'Thiết kế Web';
      case 'didong':
        return 'Lập trình Di động';
      case 'fullstack':
        return 'Lập trình Fullstack';
      case 'frontend':
        return 'Lập trình Front-End';
      case 'tuduy':
        return 'Tư duy Lập trình';
      default:
        return 'Lập trình';
    }
  };

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 blur-sm rounded-xl" />
        <div className="relative flex items-center px-6 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="mr-3 p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
            <Tag className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {displayCategory(categoryId)}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {displayedCourses.map((course, index) => (
          <div key={index} className="flex justify-center">
            <CourseCard
              id={course.maKhoaHoc}
              title={course.tenKhoaHoc}
              instructor="John Smith"
              originalPrice={1999000}
              discountPrice={599000}
              rating={4.8}
              totalRatings={2345}
              studentCount="12,345"
              category="Web Development"
              imageUrl="https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg"
              // level="Beginner"
              // isBestseller={true}
              // isNew={true}
            />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button text="Load More" onClick={loadMore} />
        </div>
      )}
    </div>
  );
};

export default Catalogue;
