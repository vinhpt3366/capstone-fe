import api from './base';

export interface CatalogItem {
  maDanhMuc: string;
  tenDanhMuc: string;
}

export const catalogService = {
  getItems: () => {
    return api.get<CatalogItem[]>('/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
  }
};
