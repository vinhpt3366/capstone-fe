import { api } from './base';

export interface LoginCredentials {
  taiKhoan: string;
  matKhau: string;
}

export interface RegisterCredentials {
  matKhau: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
}

export interface LoginResponse {
  taiKhoan: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  hoTen: string;
  accessToken: string;
}
interface RegisterResponse {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maNhom: string;
  email: string;
}

export const authService = {
  login: (credentials: LoginCredentials) => {
    return api.post<LoginResponse>('/QuanLyNguoiDung/DangNhap', credentials);
  },

  register: (credentials: RegisterCredentials) => {
    return api.post<RegisterResponse>('/QuanLyNguoiDung/DangKy', credentials);
  },

  logout: () => {
    /**
     * logout method
     */
    // return api.post('/');
  }
};
