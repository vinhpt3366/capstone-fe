import React from 'react';
import {
  Star,
  Clock,
  Users,
  ChevronRight,
  Award,
  Sparkles,
  GraduationCap,
  Code,
  User
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RouteEnum } from '@/common/common.enum';

interface CourseCardProps {
  id?: string;
  title: string;
  instructor: string;
  originalPrice: number;
  discountPrice: number;
  rating: number;
  totalRatings: number;
  studentCount: string;
  imageUrl?: string;
  category: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  isBestseller?: boolean;
  isNew?: boolean;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  originalPrice,
  discountPrice,
  rating,
  totalRatings,
  studentCount,
  imageUrl,
  category,
  level,
  duration = '22.5 total hours',
  isBestseller = false,
  isNew = false,
  className = ''
}) => {
  const discountPercent = Math.round(
    ((originalPrice - discountPrice) / originalPrice) * 100
  );
  const navigate = useNavigate();

  const levelConfig = {
    Beginner: {
      className: 'bg-green-100 text-green-800 border-green-200'
    },
    Intermediate: {
      className: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    Advanced: {
      className: 'bg-purple-100 text-purple-800 border-purple-200'
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div
      className={`group w-[300px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer  ${className}`}
      onClick={() => {
        navigate(`${RouteEnum.COURSE_DETAILS}?id=${id}`);
      }}
    >
      {/* Badges Container */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isBestseller && (
          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-md flex items-center gap-1">
            <Award className="w-3 h-3" />
            Bestseller
          </span>
        )}

        {isNew && (
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 border border-green-200 rounded-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            New
          </span>
        )}

        {level && (
          <span
            className={`px-2 py-1 text-xs font-medium rounded-md flex items-center gap-1 border ${level && levelConfig[level].className}`}
          >
            <GraduationCap className="w-3 h-3" />
            {level && level}
          </span>
        )}
      </div>

      {/* Discount Badge */}
      {discountPercent > 0 && (
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-md flex items-center gap-1">
            -{discountPercent}%
          </span>
        </div>
      )}

      {/* Course Image Container */}
      <div className="relative h-[180px] overflow-hidden rounded-t-lg">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            <Code className="w-16 h-16 text-white/80" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200 rounded-md inline-flex items-center gap-1">
          <Code className="w-3 h-3" />
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{studentCount}</span>
          </div>
        </div>

        {/* Instructor */}
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <User className="w-4 h-4 text-gray-400" />
          {instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-gray-800">
            {rating.toFixed(1)}
          </span>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-current"
                fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">
            ({totalRatings.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800">
              {formatPrice(discountPrice)}
            </span>
            {discountPrice < originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
