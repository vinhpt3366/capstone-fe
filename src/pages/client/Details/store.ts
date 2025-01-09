import useGlobalLoadingStore from '@/features/LoadingGlobal/store';
import {
  Course,
  CourseRegisterCredentials,
  courseService
} from '@/services/course.service';
import toast from 'react-hot-toast';
import { create } from 'zustand';

interface CourseDetailState {
  course: Course | null;
  isLoading: boolean;
  error: string | null;
  fetchCourses: (id: string) => Promise<void>;
  registerCourse: (credentials: CourseRegisterCredentials) => Promise<void>;
  unregisterCourse: (
    credentials: CourseRegisterCredentials
  ) => Promise<boolean>;
}

export const useCourseDetailStore = create<CourseDetailState>((set) => ({
  course: null,
  isLoading: false,
  error: null,

  fetchCourses: async (id: string) => {
    const globalLoading = useGlobalLoadingStore.getState();

    set({ isLoading: true, error: null });
    try {
      globalLoading.setLoading(true);
      const course = await courseService.getInfoCourse(id);
      set({
        course,
        isLoading: false
      });
    } catch (error) {
      set({ error: 'Failed to fetch courses', isLoading: false });
      console.error('Error fetching courses:', error);
    } finally {
      globalLoading.setLoading(false);
    }
  },
  registerCourse: async (credentials: CourseRegisterCredentials) => {
    const globalLoading = useGlobalLoadingStore.getState();

    set({ isLoading: true, error: null });
    try {
      globalLoading.setLoading(true);
      const response = await courseService.registerCourse(credentials);
      set({
        error: null,
        isLoading: false
      });
      toast.success(response.toString());
    } catch (error) {
      set({ error: 'Failed to register course', isLoading: false });
      console.error('Error registering course:', error);
      toast.error(error.response.data);
    } finally {
      globalLoading.setLoading(false);
    }
  },

  unregisterCourse: async (credentials: CourseRegisterCredentials) => {
    const globalLoading = useGlobalLoadingStore.getState();

    set({ isLoading: true, error: null });
    try {
      globalLoading.setLoading(true);
      const response = await courseService.unregisterCourse(credentials);
      set({
        error: null,
        isLoading: false
      });
      toast.success(response.toString());
      return true;
    } catch (error) {
      set({ error: 'Failed to unregister course', isLoading: false });
      console.error('Error unregistering course:', error);
      toast.error(error.response.data);
      return false;
    } finally {
      globalLoading.setLoading(false);
    }
  }
}));

// Selectors
export const useCourseDetailSelectors = () => {
  const isLoading = useCourseDetailStore((state) => state.isLoading);
  const error = useCourseDetailStore((state) => state.error);
  const course = useCourseDetailStore((state) => state.course);
  return { course, isLoading, error };
};

// Actions
export const useCourseDetailActions = () => {
  const fetchInfoCourse = useCourseDetailStore((state) => state.fetchCourses);
  const registerCourse = useCourseDetailStore((state) => state.registerCourse);
  const unregisterCourse = useCourseDetailStore(
    (state) => state.unregisterCourse
  );
  return { fetchInfoCourse, registerCourse, unregisterCourse };
};
