import { Course, courseService } from '@/services/course.service';
import { create } from 'zustand';
import useGlobalLoadingStore from '../LoadingGlobal/store';

interface CourseState {
  // State
  courses: Course[];
  courseList1: Course[];
  courseList2: Course[];
  courseList3: Course[];
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchCourses: () => Promise<void>;
}

const initialState = {
  courses: [],
  courseList1: [],
  courseList2: [],
  courseList3: [],
  isLoading: false,
  error: null
};

export const useCourseStore = create<CourseState>((set) => ({
  // Initial state
  ...initialState,

  // Actions
  fetchCourses: async () => {
    const globalLoading = useGlobalLoadingStore.getState();

    try {
      set({ isLoading: true, error: null });
      const response = await courseService.getAllCourses();
      globalLoading.setLoading(true);
      const filteredCourses = response.filter((course) => course.maKhoaHoc);

      const courseList1 = filteredCourses.slice(0, 4);
      const courseList2 = filteredCourses.slice(4, 8);
      const courseList3 = filteredCourses.slice(8, 12);

      set({
        courses: filteredCourses,
        courseList1,
        courseList2,
        courseList3,
        isLoading: false
      });
    } catch (e) {
      console.error('Failed to fetch courses:', e);
      set({
        error: 'Failed to fetch courses',
        isLoading: false
      });
    } finally {
      globalLoading.setLoading(false);
    }
  }
}));

export const useCourseActions = () => {
  const { fetchCourses } = useCourseStore();
  return { fetchCourses };
};

export const useCourseSelectors = () => {
  const courses = useCourseStore((state) => state.courses);
  const courseList1 = useCourseStore((state) => state.courseList1);
  const courseList2 = useCourseStore((state) => state.courseList2);
  const courseList3 = useCourseStore((state) => state.courseList3);
  const isLoading = useCourseStore((state) => state.isLoading);
  const error = useCourseStore((state) => state.error);

  return {
    courses,
    courseList1,
    courseList2,
    courseList3,
    isLoading,
    error
  };
};
