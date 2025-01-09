import { create } from 'zustand';
import { authService, LoginCredentials } from '@/services/auth.service';
import { useAuthStore } from '@/pages/auth/AuthForms/store';

interface LoginState {
  username: string;
  password: string;
  isLoading: boolean;
  error: string | null;

  // Actions
  setState: <K extends keyof LoginState>(key: K, value: LoginState[K]) => void;
  resetForm: () => void;
  login: () => Promise<boolean>;
}

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: null
};

export const useLoginStore = create<LoginState>()((set, get) => ({
  ...initialState,

  // Actions
  setState: (key, value) => {
    set({ [key]: value } as any);
  },

  resetForm: () => {
    set(initialState);
  },

  login: async () => {
    const state = get();
    const { password, username } = state;

    // Validate
    const requiredFields = ['username', 'password'] as const;
    const missingFields = requiredFields.filter((field) => !state[field]);
    if (missingFields.length > 0) {
      set({
        error: `Vui lòng điền đầy đủ thông tin: ${missingFields.join(', ')}`
      });
      return false;
    }

    const credentials: LoginCredentials = {
      taiKhoan: username,
      matKhau: password
    };

    try {
      set({ isLoading: true, error: null });
      const response = await authService.login(credentials);
      useAuthStore.getState().setUser(response);
      set(initialState);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      set({
        error: error instanceof Error ? error.message : 'Đăng nhập thất bại'
      });
      return false;
    } finally {
      set({ isLoading: false });
    }
  }
}));

export const useLoginActions = () => {
  const { setState, resetForm, login } = useLoginStore();
  return { setState, resetForm, login };
};

export const useLoginState = () => {
  const { username, password, isLoading, error } = useLoginStore();
  return { username, password, isLoading, error };
};
