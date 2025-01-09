import useGlobalLoadingStore from '@/features/LoadingGlobal/store';
import { Course, courseService } from '@/services/course.service';
import { create } from 'zustand';

interface CourseState {
  courses: Course[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  isLoading: boolean;
  error: string | null;
  getCourses: () => Promise<void>;
  setCurrentPage: (page: number) => Promise<void>;
}

const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  currentPage: 1,
  totalPages: 0,
  totalCount: 0,
  pageSize: 12,
  isLoading: false,
  error: null,

  setCurrentPage: async (page: number) => {
    const { getCourses } = get();
    set({ currentPage: page });
    await getCourses();
  },

  getCourses: async () => {
    const { currentPage, pageSize } = get();
    set({ isLoading: true, error: null });
    const globalLoading = useGlobalLoadingStore.getState();
    try {
      globalLoading.setLoading(true);
      const response = await courseService.getCoursesPagination({
        pageIndex: currentPage,
        pageSize
      });

      if (!response) throw new Error('Lỗi khi gọi API');

      set({
        courses: response.items,
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        totalCount: response.totalCount,
        isLoading: false
      });
    } catch (error) {
      set({ error: error?.toString(), isLoading: false });
    } finally {
      globalLoading.setLoading(false);
    }
  }
}));

// Selectors
export const useCourseSelectors = () => {
  const courses = useCourseStore((state) => state.courses);
  const currentPage = useCourseStore((state) => state.currentPage);
  const totalPages = useCourseStore((state) => state.totalPages);
  const totalCount = useCourseStore((state) => state.totalCount);
  const pageSize = useCourseStore((state) => state.pageSize);
  const isLoading = useCourseStore((state) => state.isLoading);
  const error = useCourseStore((state) => state.error);
  return {
    courses,
    currentPage,
    totalPages,
    pageSize,
    totalCount,
    isLoading,
    error
  };
};

// Actions
export const useCourseActions = () => {
  const getCourses = useCourseStore((state) => state.getCourses);
  const setCurrentPage = useCourseStore((state) => state.setCurrentPage);
  return { getCourses, setCurrentPage };
};
