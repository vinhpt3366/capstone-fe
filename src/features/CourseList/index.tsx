import React, { memo, useEffect } from 'react';
import CourseCard from '../CourseCard';
import { useCourseActions, useCourseSelectors } from './store';

const CourseList = memo((): React.ReactElement => {
  const { fetchCourses } = useCourseActions();
  const { courseList1, courseList2, courseList3 } = useCourseSelectors();

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {courseList1?.length > 0 && (
        <>
          <div className="my-6">
            <h2 className="text-2xl font-bold text-gray-800">Khoá học I</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courseList1.map((course, index) => (
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
        </>
      )}

      {courseList2?.length > 0 && (
        <>
          <div className="my-6">
            <h2 className="text-2xl font-bold text-gray-800">Khoá học II</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courseList2.map((course, index) => (
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
        </>
      )}

      {courseList3?.length > 0 && (
        <>
          <div className="my-6">
            <h2 className="text-2xl font-bold text-gray-800">Khoá học III</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courseList3.map((course, index) => (
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
        </>
      )}
    </div>
  );
});

export default CourseList;
