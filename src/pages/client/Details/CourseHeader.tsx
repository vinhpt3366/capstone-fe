import React from 'react';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

interface CourseHeaderProps {
  title: string;
  tags: string[];
  stats: {
    duration: string;
    students: number;
    rating: { score: number; count: number };
    lessons: number;
  };
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({
  title,
  tags,
  stats
}) => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1 rounded-full text-sm ${
            index === 0
              ? 'bg-blue-100 text-blue-600'
              : 'bg-green-100 text-green-600'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-600">{stats.duration}</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-600">
          {stats.students.toLocaleString()} học viên
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-yellow-400" />
        <span className="text-sm text-gray-600">
          {stats.rating.score}/5 ({stats.rating.count} đánh giá)
        </span>
      </div>
      <div className="flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-600">{stats.lessons} bài học</span>
      </div>
    </div>
  </div>
);
