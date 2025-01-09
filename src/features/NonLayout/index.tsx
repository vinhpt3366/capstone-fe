import React, { memo, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface NonAuthLayoutProps {
  children?: ReactNode;
}

const NonAuthLayout = memo(
  ({ children }: NonAuthLayoutProps): React.ReactElement => {
    return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
        <main className="flex-1 w-full">
          {children}
          <Outlet />
        </main>
      </div>
    );
  }
);

export default NonAuthLayout;
