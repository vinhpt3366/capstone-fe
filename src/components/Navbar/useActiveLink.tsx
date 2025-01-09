import { useEffect, useState } from 'react';
import { NavLinkProps } from './types';
import { useNavigate } from 'react-router-dom';

const useActiveLink = (navLinks: NavLinkProps[]) => {
  const [activeLink, setActiveLink] = useState<string>('/home');
  const navigate = useNavigate();
  const handleLinkClick = (path: string, elementId?: string): void => {
    setActiveLink(path);
    navigate(path);
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 64; // header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 100;

      navLinks.forEach(({ path, elementId }) => {
        if (elementId) {
          const element = document.getElementById(elementId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop - 100 &&
              scrollPosition < offsetTop + offsetHeight - 100
            ) {
              setActiveLink(path);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return { activeLink, handleLinkClick };
};

export default useActiveLink;
