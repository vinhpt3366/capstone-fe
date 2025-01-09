// registerStore.ts
import { create } from 'zustand';
import { authService, RegisterCredentials } from '@/services/auth.service';

interface RegisterState {
  // State
  email: string;
  password: string;
  fullname: string;
  username: string;
  phone: string;
  group: string;
  isLoading: boolean;
  error: string | null;

  // Actions
  setState: <
    K extends keyof Omit<RegisterState, 'setState' | 'resetForm' | 'register'>
  >(
    key: K,
    value: RegisterState[K]
  ) => void;
  resetForm: () => void;
  register: () => Promise<boolean>;
}

const initialState = {
  email: '',
  password: '',
  fullname: '',
  username: '',
  phone: '',
  group: 'GP01',
  isLoading: false,
  error: null
};

export const useRegisterStore = create<RegisterState>()((set, get) => ({
  ...initialState,

  setState: (key, value) => {
    set({ [key]: value } as any);
  },

  resetForm: () => {
    set(initialState);
  },

  register: async () => {
    const state = get();
    const { email, password, username, fullname, phone, group } = state;

    // Validate required fields
    const requiredFields = [
      'email',
      'password',
      'username',
      'fullname',
      'phone',
      'group'
    ] as const;
    const missingFields = requiredFields.filter((field) => !state[field]);

    if (missingFields.length > 0) {
      set({
        error: `Vui lòng điền đầy đủ thông tin: ${missingFields.join(', ')}`
      });
      return false;
    }

    const credentials: RegisterCredentials = {
      email,
      matKhau: password,
      taiKhoan: username,
      hoTen: fullname,
      soDT: phone,
      maNhom: group
    };

    try {
      set({ isLoading: true, error: null });
      await authService.register(credentials);
      set(initialState);
      return true;
    } catch (error) {
      console.error('Register failed:', error);
      set({
        error: error instanceof Error ? error.message : 'Đăng ký thất bại'
      });
      return false;
    } finally {
      set({ isLoading: false });
    }
  }
}));

// Custom hooks để dễ sử dụng
export const useRegisterActions = () => {
  const { setState, resetForm, register } = useRegisterStore();
  return { setState, resetForm, register };
};

export const useRegisterState = () => {
  const {
    username,
    password,
    isLoading,
    error,
    email,
    group,
    phone,
    fullname
  } = useRegisterStore();
  return {
    username,
    password,
    isLoading,
    error,
    email,
    group,
    phone,
    fullname
  };
};
