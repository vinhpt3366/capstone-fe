import React, { memo, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { RouteEnum } from '../../common/common.enum';
import { useAuth } from '@/pages/auth/AuthForms/store';
import NavBar from '@/components/Navbar';
import Footer from '../Footer';

interface IProps {
  children?: React.ReactNode;
}

const AuthLayout = memo(({ children }: IProps): React.ReactElement => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {
    handleNavigation();
  }, [isAuthenticated, user]);

  const handleNavigation = (): void => {
    if (isAuthenticated && user) {
      // if (user.role === 'admin') {
      //   navigate(RouteEnum.ADMIN);
      // } else {
      //   navigate(RouteEnum.HOME);
      // }
    } else {
      navigate(RouteEnum.HOME);
    }
  };

  if (!isAuthenticated) return <></>;

  return (
    <>
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full rounded-lg shadow-md mt-20">
          {children}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
});

export default AuthLayout;
