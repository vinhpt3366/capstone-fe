import { create } from 'zustand';
import { IoMenu } from 'react-icons/io5';
import { RouteEnum } from '@/common/common.enum';
import { CatalogItem, catalogService } from '@/services/catalog.service';
import { NavLinkProps } from './types';

interface NavState {
  navLinks: NavLinkProps[];
  isLoading: boolean;
  error: string | null;
  fetchCatalogItems: () => Promise<void>;
}

const initialNavLinks: NavLinkProps[] = [
  {
    path: `${RouteEnum.HOME}`,
    text: 'Danh mục',
    elementId: 'catalogue',
    submenu: [],
    icon: IoMenu
  },
  {
    path: `${RouteEnum.COURSE}`,
    text: 'Khoá học',
    elementId: 'course'
  },
  {
    path: `${RouteEnum.BLOG}`,
    text: 'Blog',
    elementId: 'blog'
  },
  {
    path: `${RouteEnum.EVENT}`,
    text: 'Sự kiện',
    elementId: 'event',
    submenu: [
      { path: '/event#dau-nam', text: 'Sự kiện đầu năm' },
      { path: '/event#giua-nam', text: 'Lập trình giữa năm' },
      { path: '/event#cuoi-nam', text: 'Sự kiện cuối năm' }
    ]
  },
  { path: `${RouteEnum.INFO}`, text: 'Thông tin', elementId: 'info' }
];

export const useNavStore = create<NavState>((set) => ({
  navLinks: initialNavLinks,
  isLoading: false,
  error: null,
  fetchCatalogItems: async () => {
    set({ isLoading: true, error: null });
    try {
      const catalogItems = await catalogService.getItems();
      set((state) => ({
        navLinks: state.navLinks.map((link) =>
          link.elementId === 'catalogue'
            ? {
                ...link,
                submenu: catalogItems.map((item: CatalogItem) => ({
                  path: `${RouteEnum.CATALOGUE}?id=${item.maDanhMuc}`,
                  text: item.tenDanhMuc
                }))
              }
            : link
        ),
        isLoading: false
      }));
    } catch (error) {
      set({
        error: 'Failed to fetch catalog items',
        isLoading: false
      });
      console.error('Error fetching catalog items:', error);
    }
  }
}));

// Selectors
export const useNavSelectors = () => {
  const navLinks = useNavStore((state) => state.navLinks);
  const isLoading = useNavStore((state) => state.isLoading);
  const error = useNavStore((state) => state.error);
  return { navLinks, isLoading, error };
};

// Actions
export const useNavActions = () => {
  const fetchCatalogItems = useNavStore((state) => state.fetchCatalogItems);
  return { fetchCatalogItems };
};
