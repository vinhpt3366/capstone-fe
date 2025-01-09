import StatsBar from '@/features/StatsBar';
import React, { memo, useEffect } from 'react';
import { useCourseActions, useCourseSelectors } from './store';
import CourseCard from '@/features/CourseCard';
import Pagination from '@/components/Pagination';

const Course = memo((): React.ReactElement => {
  const { courses, currentPage, totalPages } = useCourseSelectors();
  const { getCourses, setCurrentPage } = useCourseActions();
  // useEffect
  useEffect(() => {
    getCourses();
  }, [currentPage]);

  return (
    <div className="mt-10">
      <StatsBar />
      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {courses.map((course, index) => (
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
        <div className="flex justify-center items-center py-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
});

export default Course;
