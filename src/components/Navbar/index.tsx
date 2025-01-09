import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '../Button/Button';
import SearchBox from '../SearchBox';
import NavLink from './NavLink';
import { useAuth, useModal } from '@/pages/auth/AuthForms/store';
import { useNavActions, useNavSelectors } from './store';
import useActiveLink from './useActiveLink';
import UserAvatarMenu from './UserAvatarMenu';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { navLinks } = useNavSelectors();
  const { fetchCatalogItems } = useNavActions();

  useEffect(() => {
    fetchCatalogItems();
  }, []);

  const { activeLink, handleLinkClick } = useActiveLink(navLinks);
  const { user } = useAuth();
  const { showLogin, reset } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogin = () => {
    showLogin();
  };

  const handleLogout = () => {
    navigate('/');
    reset();
  };

  const commonLinkClass = `uppercase block text-xl font-extrabold transition-all duration-300 ease-linear hover:text-red-500`;
  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="mx-auto flex items-center justify-between p-4">
        <div className="block lg:flex lg:items-center">
          <div className="flex items-center gap-4">
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="h-10 sm:h-10 lg:h-12 object-contain"
              />
            </a>
            <SearchBox className="hidden lg:flex" />
          </div>
        </div>

        <ul className="hidden lg:flex space-x-2 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              {...link}
              isActive={activeLink === link.path}
              onClick={handleLinkClick}
              className={commonLinkClass}
            />
          ))}
        </ul>
        <div className="block lg:flex lg:items-center">
          <div className="flex items-center">
            {!user ? (
              <Button text="ĐĂNG NHẬP" onClick={handleLogin} />
            ) : (
              <UserAvatarMenu
                user={user}
                onLogout={handleLogout}
                onProfileClick={() => {
                  navigate('/profile');
                }}
              />
            )}
            <button
              className="lg:hidden ml-4 flex items-center justify-center text-gray-700"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-10 lg:hidden h-screen"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <ul className="p-4 space-y-4 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              {...link}
              isActive={activeLink === link.path}
              onClick={handleLinkClick}
              className={commonLinkClass}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
