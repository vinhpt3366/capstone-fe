export interface LessonType {
  id: number;
  title: string;
  duration: string;
  videoUrl?: string;
}

export interface SectionType {
  id: number;
  title: string;
  lessons: LessonType[];
}
