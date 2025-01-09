import api from './base';

export interface Course {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: {
    taiKhoan: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
  };
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: string;
    tenDanhMucKhoaHoc: string;
  };
}

export interface PaginationParams {
  pageSize: number;
  pageIndex: number;
}

export interface PaginationResponse<T> {
  items: T[];
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
}

export interface CourseRegisterCredentials {
  maKhoaHoc: string | undefined;
  taiKhoan: string | undefined;
}

export interface CourseRegisterResponse {
  message?: string;
  status?: number;
}

export interface SearchCourseParams {
  tenKhoaHoc: string;
  MaNhom?: string;
}

export const courseService = {
  getAllCourses: () => {
    return api.get<Course[]>('/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
  },

  getCoursesByCategory: (categoryId: string) => {
    return api.get<Course[]>(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc`, {
      params: {
        maDanhMuc: categoryId
      }
    });
  },

  getCoursesPagination: ({ pageIndex, pageSize }: PaginationParams) => {
    return api.get<PaginationResponse<Course>>(
      '/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang',
      {
        params: {
          page: pageIndex,
          pageSize: pageSize,
          MaNhom: 'GP01'
        }
      }
    );
  },

  getInfoCourse: (id: string) => {
    return api.get<Course>(`/QuanLyKhoaHoc/LayThongTinKhoaHoc`, {
      params: {
        maKhoaHoc: id
      }
    });
  },

  registerCourse: (credentials: CourseRegisterCredentials) => {
    return api.post<CourseRegisterResponse>(
      '/QuanLyKhoaHoc/DangKyKhoaHoc',
      credentials
    );
  },

  unregisterCourse: (credentials: CourseRegisterCredentials) => {
    return api.post<CourseRegisterResponse>(
      '/QuanLyKhoaHoc/HuyGhiDanh',
      credentials
    );
  },

  searchCourses: ({ tenKhoaHoc, MaNhom = 'GP01' }: SearchCourseParams) => {
    return api.get<Course[]>('/QuanLyKhoaHoc/LayDanhSachKhoaHoc', {
      params: {
        tenKhoaHoc,
        MaNhom
      }
    });
  }
};
