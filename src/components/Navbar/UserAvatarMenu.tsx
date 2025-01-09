import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User } from 'lucide-react';
import { LoginResponse } from '@/services/auth.service';

interface UserType extends LoginResponse {
  name?: string;
  avatar?: string;
}

interface UserAvatarProps {
  user: UserType;
  size?: string;
}

interface UserAvatarMenuProps {
  user: UserType;
  onLogout?: () => void;
  onProfileClick?: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'h-8 w-8' }) => {
  return (
    <div
      className={`${size} rounded-full overflow-hidden border-2 border-gray-200 mt-2`}
    >
      {user.avatar ? (
        <img
          src={user.avatar}
          alt="User avatar"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
          <User className="h-4 w-4 text-gray-600" />
        </div>
      )}
    </div>
  );
};

const UserAvatarMenu: React.FC<UserAvatarMenuProps> = ({
  user,
  onLogout,
  onProfileClick
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="focus:outline-none"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <UserAvatar user={user} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            <button
              onClick={() => {
                onProfileClick?.();
                setIsDropdownOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              <User className="mr-2 h-4 w-4" />
              Thông tin cá nhân
            </button>
            <button
              onClick={() => {
                onLogout?.();
                setIsDropdownOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAvatarMenu;
