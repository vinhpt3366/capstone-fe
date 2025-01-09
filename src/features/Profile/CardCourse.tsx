import React from 'react';
import {
  Clock,
  Hourglass,
  BookOpen,
  X,
  Trophy,
  Star,
  TrendingUp
} from 'lucide-react';

interface CardCourseProps {
  id: number;
  maKhoaHoc: string;
  name: string;
  description: string;
  image: string;
  progress: number;
  totalTime: string;
  learnedTime: string;
  level: string;
  rating?: number;
  studentsCount?: number;
  lastUpdated?: string;
  onEnterCourse: (id: number) => void;
  onCancelCourse: (maKhoaHoc: string) => void;
}

const CardCourse: React.FC<CardCourseProps> = ({
  id,
  maKhoaHoc,
  name,
  description,
  image,
  progress,
  totalTime,
  learnedTime,
  level,
  rating = 4.5,
  studentsCount = 1234,
  lastUpdated = '2024',
  onEnterCourse,
  onCancelCourse
}) => {
  const levelConfig: Record<string, { color: string; gradient: string }> = {
    Beginner: {
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-400'
    },
    Intermediate: {
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-400'
    },
    Advanced: {
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-400'
    },
    Expert: {
      color: 'rose',
      gradient: 'from-rose-500 to-pink-400'
    }
  };

  const currentLevel = levelConfig[level] || levelConfig['Beginner'];

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
      {/* Course Preview Section */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Course Meta - Absolute Positioned */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {/* Level Badge */}
          <span
            className={`
            px-3 py-1.5 rounded-lg text-xs font-medium
            bg-gradient-to-r ${currentLevel.gradient}
            text-white shadow-lg shadow-${currentLevel.color}-500/20
            backdrop-blur-sm
          `}
          >
            {level}
          </span>

          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5">
          <div className="relative w-full h-full bg-gray-200/30 backdrop-blur-sm">
            <div
              className={`absolute h-full bg-gradient-to-r ${currentLevel.gradient} transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>

        {/* Stats Grid - Improved Alignment */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
          {/* Time Stats */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 h-8">
              <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Thời lượng</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 ml-10">
              {totalTime}
            </p>
          </div>

          {/* Progress Stats */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 h-8">
              <div className="p-2 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                <Hourglass className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">Đã học</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 ml-10">
              {learnedTime}
            </p>
          </div>

          {/* Students Count */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 h-8">
              <div className="p-2 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors">
                <TrendingUp className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Học viên</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 ml-10">
              {studentsCount.toLocaleString()}
            </p>
          </div>

          {/* Completion Stats */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 h-8">
              <div className="p-2 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors">
                <Trophy className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-sm text-gray-600">Hoàn thành</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 ml-10">
              {progress}%
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onEnterCourse(id)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
    text-white bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 bg-[length:200%]
    border border-transparent hover:border-pink-500
    hover:shadow-[0_0_10px_rgba(245,95,141,0.5)]
    hover:bg-right transition-all duration-300"
          >
            <BookOpen className="w-4 h-4" />
            <span>Tiếp tục học</span>
          </button>

          <button
            onClick={() => onCancelCourse(maKhoaHoc)}
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl
              border border-gray-200 text-gray-500
              hover:border-red-200 hover:bg-red-50 hover:text-red-600
              active:bg-red-100
              transition-all duration-200"
            title="Hủy khóa học"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Last Updated */}
        <div className="mt-4 text-xs text-gray-500">
          Cập nhật: {lastUpdated}
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
