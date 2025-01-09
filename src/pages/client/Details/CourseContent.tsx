import React from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { LessonType, SectionType } from './types';

interface CourseContentProps {
  sections: SectionType[];
  selectedLesson: LessonType | null;
  expandedSection: number | null;
  onSectionToggle: (sectionId: number) => void;
  onLessonSelect: (lesson: LessonType) => void;
}

export const CourseContent: React.FC<CourseContentProps> = ({
  sections,
  selectedLesson,
  expandedSection,
  onSectionToggle,
  onLessonSelect
}) => (
  <section className="bg-white rounded-lg shadow-sm">
    {selectedLesson && <VideoPlayer lesson={selectedLesson} />}

    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">Nội dung khóa học</h2>
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border rounded-lg">
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
              onClick={() => onSectionToggle(section.id)}
            >
              <h3 className="font-medium">{section.title}</h3>
              {expandedSection === section.id ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {expandedSection === section.id && (
              <div className="border-t">
                {section.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    className={`w-full p-4 flex items-center justify-between hover:bg-gray-50 border-b last:border-b-0
                      ${selectedLesson?.id === lesson.id ? 'bg-blue-50' : ''}`}
                    onClick={() => onLessonSelect(lesson)}
                  >
                    <div className="flex items-center gap-3">
                      <Play className="w-4 h-4" />
                      <span>{lesson.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {lesson.duration}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
