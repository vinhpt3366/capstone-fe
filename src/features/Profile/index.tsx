import React, { useEffect, useState } from 'react';
import { UserCircle, BookOpen, AlertCircle } from 'lucide-react';
import CardCourse from './CardCourse';
import DetailInfo from './DetailInfo';
import UserInfo from './UserInfo';
import { UserProfile } from '@/services/user.service';
import { useCourseDetailActions } from '@/pages/client/Details/store';
import { getUsername } from '@/pages/auth/AuthForms/store';
import { useUserProfileActions } from '@/pages/client/Profile/store';
import Button from '@/components/Button/Button';
import { RouteEnum } from '@/common/common.enum';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: number;
  maKhoaHoc: string;
  name: string;
  description: string;
  image: string;
  progress: number;
  totalTime: string;
  learnedTime: string;
  level: string;
}

interface ProfileProps {
  profile: UserProfile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const { unregisterCourse } = useCourseDetailActions();
  const { getInfo } = useUserProfileActions();
  const navigate = useNavigate();

  const userInfo = {
    email: profile.email,
    name: profile.hoTen,
    phone: profile.soDT,
    username: profile.taiKhoan,
    group: profile.maNhom,
    role: profile.maLoaiNguoiDung,
    avatar: '/vlearning/avatar2.png',
    address: '',
    bio: 'Một lập trình viên đam mê học hỏi và phát triển bản thân.'
  };

  const courseList = profile.chiTietKhoaHocGhiDanh;

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const transformedCourses = courseList.map((course, index) => ({
      id: index,
      maKhoaHoc: course.maKhoaHoc,
      name: course.tenKhoaHoc,
      description: course.moTa,
      image: course.hinhAnh,
      progress: 0,
      totalTime: '10 giờ',
      learnedTime: '0 giờ',
      level: 'Beginner'
    }));
    setCourses(transformedCourses);
  }, [profile]);

  const [activeTab, setActiveTab] = useState('info');

  const handleCancelCourse = async (maKhoaHoc: string) => {
    try {
      const username = getUsername();
      const isSuccess = await unregisterCourse({
        taiKhoan: username,
        maKhoaHoc
      });

      if (isSuccess) {
        getInfo();
      }
    } catch (error) {
      console.error('Error canceling course:', error);
    }
  };

  const handleEnterCourse = (id: number) => {
    console.log('Entering course ' + id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3 space-y-6">
          <DetailInfo
            avatar={userInfo.avatar}
            name={userInfo.name}
            email={userInfo.email}
            phone={userInfo.phone}
            address={userInfo.address}
            bio={userInfo.bio}
          />
        </div>

        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex space-x-1 border-b mb-6 whitespace-nowrap overflow-y-auto">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex items-center px-4 py-2 rounded-t-lg transition-all ${
                  activeTab === 'info'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <UserCircle className="w-4 h-4 mr-2" />
                Thông tin cá nhân
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`flex items-center px-4 py-2 rounded-t-lg transition-all ${
                  activeTab === 'courses'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Khóa học của tôi
              </button>
            </div>

            {/* Tab Content */}
            <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
              {activeTab === 'courses' && (
                <div className="space-y-4">
                  {courses.length > 0 ? (
                    courses.map((course) => (
                      <div
                        key={course.id}
                        className="transform transition-all hover:-translate-y-1"
                      >
                        <CardCourse
                          {...course}
                          onEnterCourse={handleEnterCourse}
                          onCancelCourse={handleCancelCourse}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                      <AlertCircle className="w-12 h-12 mb-4" />
                      <p className="text-lg font-medium">
                        Bạn chưa đăng ký khóa học nào
                      </p>
                      <p className="text-sm">
                        Hãy khám phá các khóa học của chúng tôi
                      </p>

                      <div className="flex justify-center mt-7">
                        <Button
                          text="Tìm kiếm khóa học"
                          onClick={() => {
                            navigate(RouteEnum.COURSE);
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'info' && (
                <div className="transition-all">
                  <UserInfo {...userInfo} onUpdate={() => {}} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
