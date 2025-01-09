import useGlobalLoadingStore from '@/features/LoadingGlobal/store';
import { Course, courseService } from '@/services/course.service';
import { create } from 'zustand';

interface CatalogueState {
  allCourses: Course[];
  displayedCourses: Course[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchCoursesByCategory: (categoryId: string) => Promise<void>;
  loadMore: () => void;
}

const ITEMS_PER_PAGE = 8;

export const useCatalogueStore = create<CatalogueState>((set, get) => ({
  allCourses: [],
  displayedCourses: [],
  isLoading: false,
  error: null,
  hasMore: true,

  fetchCoursesByCategory: async (categoryId: string) => {
    const globalLoading = useGlobalLoadingStore.getState();

    set({ isLoading: true, error: null });
    try {
      globalLoading.setLoading(true);
      const courses = await courseService.getCoursesByCategory(categoryId);
      set({
        allCourses: courses,
        displayedCourses: courses.slice(0, ITEMS_PER_PAGE),
        isLoading: false,
        hasMore: courses.length > ITEMS_PER_PAGE
      });
    } catch (error) {
      set({ error: 'Failed to fetch courses', isLoading: false });
      console.error('Error fetching courses:', error);
    } finally {
      globalLoading.setLoading(false);
    }
  },

  loadMore: () => {
    const { allCourses, displayedCourses } = get();
    const currentLength = displayedCourses.length;
    const newDisplayedCourses = allCourses.slice(
      0,
      currentLength + ITEMS_PER_PAGE
    );
    set({
      displayedCourses: newDisplayedCourses,
      hasMore: newDisplayedCourses.length < allCourses.length
    });
  }
}));

// Selectors
export const useCatalogueSelectors = () => {
  const displayedCourses = useCatalogueStore((state) => state.displayedCourses);
  const isLoading = useCatalogueStore((state) => state.isLoading);
  const error = useCatalogueStore((state) => state.error);
  const hasMore = useCatalogueStore((state) => state.hasMore);
  return { displayedCourses, isLoading, error, hasMore };
};

// Actions
export const useCatalogueActions = () => {
  const fetchCoursesByCategory = useCatalogueStore(
    (state) => state.fetchCoursesByCategory
  );
  const loadMore = useCatalogueStore((state) => state.loadMore);
  return { fetchCoursesByCategory, loadMore };
};
