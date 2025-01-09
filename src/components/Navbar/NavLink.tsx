import React from 'react';
import { NavLinkProps } from './types';

const NavLink: React.FC<NavLinkProps> = ({
  path,
  text,
  elementId,
  isActive,
  onClick,
  className,
  submenu,
  icon: Icon
}) => (
  <li className="relative group">
    <a
      href={elementId ? `#${elementId}` : '#!'}
      className={`nav-link ${className} ${isActive ? 'active' : ''} flex items-center space-x-2`}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(path, elementId);
      }}
    >
      {Icon && (
        <Icon
          className={`text-lg flex-shrink-0 text-current ${isActive ? 'text-red-500' : ''} hover:text-red-500`}
        />
      )}
      <span className="flex-1 whitespace-nowrap">{text}</span>
    </a>
    {submenu && (
      <ul className="submenu uppercase">
        {submenu.map((subItem) => (
          <li key={subItem.path}>
            <a
              href={subItem.path}
              className="submenu-link"
              onClick={(e) => {
                e.preventDefault();
                onClick?.(subItem.path);
              }}
            >
              {subItem.text}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default NavLink;
