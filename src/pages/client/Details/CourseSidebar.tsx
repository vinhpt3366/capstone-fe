import React from 'react';
import { GraduationCap, Clock3, Layout, Video } from 'lucide-react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input';

interface CourseSidebarProps {
  price: string;
  stats: {
    students: number;
    duration: string;
    lessons: number;
    videos: number;
  };
  registerCourse?: () => void;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({
  price,
  stats,
  registerCourse
}) => (
  <div className="sticky top-6 bg-white rounded-lg shadow-sm p-6 space-y-6">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">{price}</span>
      </div>

      <Button text="ĐĂNG KÝ" onClick={registerCourse} fullWidth={true} />

      <div className="space-y-4 pt-4 border-t">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-gray-500" />
          <div>
            <span className="text-gray-600">Ghi danh:</span>
            <span className="font-medium ml-2">{stats.students} học viên</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock3 className="w-5 h-5 text-gray-500" />
          <div>
            <span className="text-gray-600">Thời gian:</span>
            <span className="font-medium ml-2">{stats.duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Layout className="w-5 h-5 text-gray-500" />
          <div>
            <span className="text-gray-600">Bài học:</span>
            <span className="font-medium ml-2">{stats.lessons}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Video className="w-5 h-5 text-gray-500" />
          <div>
            <span className="text-gray-600">Video:</span>
            <span className="font-medium ml-2">{stats.videos}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Input type="text" placeholder="Mã khuyến mãi" />
      </div>
    </div>
  </div>
);
