import { getUsername } from '@/pages/auth/AuthForms/store';
import {
  EnrolledCourse,
  UserProfile,
  userService
} from '@/services/user.service';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserProfileState {
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  addEnrolledCourse: (course: EnrolledCourse) => void;
  removeEnrolledCourse: (courseId: string) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
  getInfo: () => void;
}

const initialState = {
  profile: null,
  isLoading: false,
  error: null
};

export const useUserProfileStore = create<UserProfileState>()(
  persist(
    (set) => ({
      ...initialState,

      getInfo: async () => {
        const username = getUsername();
        set({ isLoading: true, error: null });
        try {
          const response = await userService.getInfo(username);
          set({ profile: response, isLoading: false });
        } catch (error) {
          console.error(error);
          set({ error: 'Failed to fetch user profile', isLoading: false });
        }
      },

      setProfile: (profile) => set({ profile, error: null }),

      updateProfile: (updates) =>
        set((state) => ({
          profile: state.profile ? { ...state.profile, ...updates } : null
        })),

      addEnrolledCourse: (course) =>
        set((state) => {
          if (!state.profile) return state;

          const existingCourse = state.profile.chiTietKhoaHocGhiDanh.find(
            (c) => c.maKhoaHoc === course.maKhoaHoc
          );

          if (existingCourse) return state;

          return {
            profile: {
              ...state.profile,
              chiTietKhoaHocGhiDanh: [
                ...state.profile.chiTietKhoaHocGhiDanh,
                course
              ]
            }
          };
        }),

      removeEnrolledCourse: (courseId) =>
        set((state) => {
          if (!state.profile) return state;

          return {
            profile: {
              ...state.profile,
              chiTietKhoaHocGhiDanh: state.profile.chiTietKhoaHocGhiDanh.filter(
                (course) => course.maKhoaHoc !== courseId
              )
            }
          };
        }),

      setIsLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error }),

      reset: () => set(initialState)
    }),
    {
      name: 'user-profile-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

// Helper functions
export const getUserProfile = () => {
  return useUserProfileStore.getState().profile;
};

export const getEnrolledCourses = () => {
  return useUserProfileStore.getState().profile?.chiTietKhoaHocGhiDanh || [];
};

// Selectors
export const useUserProfileSelectors = () => {
  const profile = useUserProfileStore((state) => state.profile);

  return profile;
};

// Actions
export const useUserProfileActions = () => {
  const getInfo = useUserProfileStore((state) => state.getInfo);

  return {
    getInfo
  };
};
