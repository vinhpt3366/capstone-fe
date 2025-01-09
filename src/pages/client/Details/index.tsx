import React, { useEffect, useState } from 'react';
import { LessonType } from './types';
import { CourseHeader } from './CourseHeader';
import { CourseOverview } from './CourseOverview';
import { CourseContent } from './CourseContent';
import { CourseSidebar } from './CourseSidebar';
import { CourseNotFound } from './CourseNotFound';
import { useSearchParams } from 'react-router-dom';
import { useCourseDetailActions, useCourseDetailSelectors } from './store';
import { useAuth, useModal } from '@/pages/auth/AuthForms/store';

const courseSections = [
  {
    id: 1,
    title: 'MỤC 1: GIỚI THIỆU',
    lessons: [
      {
        id: 1,
        title: 'Các khái niệm về React Component',
        duration: '14:35',
        videoUrl: 'video1'
      },
      {
        id: 2,
        title: 'Thiết lập môi trường cho Windows',
        duration: '14:35',
        videoUrl: 'video2'
      },
      {
        id: 3,
        title: 'Tạo ứng dụng React - React-Scripts',
        duration: '14:35',
        videoUrl: 'video3'
      },
      {
        id: 4,
        title: 'Ghi chú nhanh về dấu ngoặc kép cho string interpolation',
        duration: '14:35',
        videoUrl: 'video4'
      }
    ]
  },
  {
    id: 2,
    title: 'MỤC 2: KIẾN THỨC CĂN BẢN',
    lessons: [
      {
        id: 5,
        title: 'Trang chủ và thành phần thư mục',
        duration: '14:35',
        videoUrl: 'video5'
      },
      {
        id: 6,
        title: 'Hướng dẫn khóa học + Liên kết Github',
        duration: '14:35',
        videoUrl: 'video6'
      },
      {
        id: 7,
        title: 'Trang chủ thương mại điện tử + thiết lập SASS',
        duration: '14:35',
        videoUrl: 'video7'
      },
      { id: 8, title: 'Tệp CSS và SCSS', duration: '14:35', videoUrl: 'video8' }
    ]
  }
];

const CourseDetails: React.FC = () => {
  const { user } = useAuth();
  const { showLogin } = useModal();

  const [expandedSection, setExpandedSection] = useState<number | null>(1);
  const [selectedLesson, setSelectedLesson] = useState<LessonType | null>(null);
  const [credentials, setCredentials] = useState<{
    taiKhoan: string | undefined;
    maKhoaHoc: string | undefined;
  } | null>(null);
  const { fetchInfoCourse, registerCourse } = useCourseDetailActions();
  const { course } = useCourseDetailSelectors();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadCourse = async () => {
      if (id) {
        setIsLoading(true);
        await fetchInfoCourse(id);
        setIsLoading(false);
      }
    };

    loadCourse();

    const credentials = {
      taiKhoan: user?.taiKhoan,
      maKhoaHoc: id ? id : undefined
    };
    setCredentials(credentials);
  }, [id, fetchInfoCourse, user]);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
    return <CourseNotFound />;
  }

  const registerCourseHandler = async () => {
    if (!user) {
      showLogin();
      return;
    }
    if (credentials) {
      await registerCourse(credentials);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CourseHeader
        title="React và TypeScript từ cơ bản đến nâng cao"
        tags={['Frontend Development', 'Intermediate']}
        stats={{
          duration: '20 giờ học',
          students: 2345,
          rating: { score: 4.8, count: 234 },
          lessons: 15
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CourseOverview />
          <CourseContent
            sections={courseSections}
            selectedLesson={selectedLesson}
            expandedSection={expandedSection}
            onSectionToggle={(sectionId) =>
              setExpandedSection(
                expandedSection === sectionId ? null : sectionId
              )
            }
            onLessonSelect={setSelectedLesson}
          />
        </div>

        <div className="lg:col-span-1">
          <CourseSidebar
            price="500.000₫"
            stats={{
              students: 10,
              duration: '18 giờ',
              lessons: 10,
              videos: 14
            }}
            registerCourse={registerCourseHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
