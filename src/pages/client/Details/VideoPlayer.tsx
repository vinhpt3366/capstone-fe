import React from 'react';
import { Video } from 'lucide-react';
import { LessonType } from './types';

interface VideoPlayerProps {
  lesson: LessonType;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ lesson }) => (
  <div className="border-b">
    <div className="aspect-video bg-gray-900">
      <div className="w-full h-full flex items-center justify-center text-white">
        <Video className="w-12 h-12" />
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold">{lesson.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{lesson.duration}</p>
    </div>
  </div>
);
