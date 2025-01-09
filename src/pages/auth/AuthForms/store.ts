import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { LoginResponse } from '@/services/auth.service';

export type ModalType = 'login' | 'register' | null;

export interface State {
  activeModal: ModalType;
  previousModal: ModalType;
  user: LoginResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthStore extends State {
  // Actions
  setActiveModal: (modal: State['activeModal']) => void;
  setPreviousModal: (modal: State['previousModal']) => void;
  setUser: (user: State['user']) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: State['error']) => void;
  reset: () => void;
  showRegister: () => void;
  showLogin: () => void;
  closeModals: () => void;
}

const initialState: State = {
  activeModal: null,
  previousModal: null,
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,

      // Actions
      setActiveModal: (modal) => set({ activeModal: modal }),
      showRegister: () => set({ activeModal: 'register' }),
      closeModals: () => set({ activeModal: null }),
      showLogin: () => set({ activeModal: 'login' }),
      setPreviousModal: (modal) => set({ previousModal: modal }),
      setUser: (user) => set({ user, isAuthenticated: true }),
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setIsLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      reset: () => set(initialState)
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export const useAuth = () => {
  const store = useAuthStore();
  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    error: store.error
  };
};

export const useAuthActions = () => {
  const store = useAuthStore();
  return {
    setUser: store.setUser,
    setIsAuthenticated: store.setIsAuthenticated,
    setIsLoading: store.setIsLoading,
    setError: store.setError,
    reset: store.reset
  };
};

export const useModal = () => {
  const store = useAuthStore();
  return {
    activeModal: store.activeModal,
    previousModal: store.previousModal,
    setActiveModal: store.setActiveModal,
    setPreviousModal: store.setPreviousModal,
    closeModals: store.closeModals,
    showRegister: store.showRegister,
    showLogin: store.showLogin,
    reset: store.reset
  };
};

export const getAuthToken = () => {
  const state = useAuthStore.getState();
  return state.user?.accessToken || null;
};

export const getUsername = () => {
  const state = useAuthStore.getState();
  return state.user?.taiKhoan || '';
};

export const resetAuth = () => {
  useAuthStore.getState().reset();
};
