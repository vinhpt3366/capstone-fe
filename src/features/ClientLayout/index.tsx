import { AuthForms } from '@/pages/auth/AuthForms';
import React, { lazy, memo, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface ClientLayoutProps {
  children?: ReactNode;
}

const NavBar = lazy(() => import('../../components/Navbar'));
const Footer = lazy(() => import('../../features/Footer'));

const ClientLayout = memo(
  ({ children }: ClientLayoutProps): React.ReactElement => {
    return (
      <div className="min-h-screen w-screen flex flex-col">
        <NavBar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="w-full rounded-lg shadow-md mt-20">
            {children}
            <Outlet />
          </div>
        </main>

        <Footer />
        <AuthForms />
      </div>
    );
  }
);

export default ClientLayout;
