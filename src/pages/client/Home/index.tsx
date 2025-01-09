import { Hero } from '@/features';
import StatsSection from '@/features/StatsSection';
import Testimonial from '@/features/Testimonial';
import TopInstructors from '@/features/TopInstructors';
import React, { memo } from 'react';
import Course from '@/features/Course';
import CourseList from '@/features/CourseList';

const Home = memo((): React.ReactElement => {
  return (
    <>
      <Hero />
      <Course />
      <CourseList />
      <StatsSection />
      <Testimonial />
      <TopInstructors />
    </>
  );
});

export default Home;
