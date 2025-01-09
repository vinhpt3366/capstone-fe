import api from './base';

export interface EnrolledCourse {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  biDanh: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  ngayTao: string;
  danhGia: number;
}

export interface UserProfile {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: 'HV' | 'GV';
  maNhom: string;
  email: string;
  chiTietKhoaHocGhiDanh: EnrolledCourse[];
}

export const userService = {
  getInfo: (username: string) => {
    return api.post<UserProfile>('/QuanLyNguoiDung/ThongTinTaiKhoan', {
      taiKhoan: username
    });
  }
};
