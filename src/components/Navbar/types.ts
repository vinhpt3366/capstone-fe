import { IconType } from 'react-icons';

export interface NavLinkProps {
  path: string;
  text: string;
  elementId?: string;
  submenu?: NavLinkProps[];
  icon?: IconType;
  isActive?: boolean;
  onClick?: (path: string, elementId?: string) => void;
  className?: string;
}
