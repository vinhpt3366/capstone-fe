import { Course, courseService } from '@/services/course.service';
import { create } from 'zustand';

interface CourseStore {
  searchResults: Course[];
  loading: boolean;
  error: string | null;
  searchCourses: (searchTerm: string) => Promise<void>;
  clearSearchResults: () => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
  searchResults: [],
  loading: false,
  error: null,

  searchCourses: async (searchTerm: string) => {
    try {
      set({ loading: true, error: null });
      const response = await courseService.searchCourses({
        tenKhoaHoc: searchTerm
      });
      set({ searchResults: response, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Có lỗi xảy ra',
        loading: false
      });
    }
  },

  clearSearchResults: () => {
    set({ searchResults: [], error: null });
  }
}));
