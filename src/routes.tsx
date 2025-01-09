import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteEnum } from '../src/common/common.enum';
import AuthLayout from '../src/features/AuthLayout';
import ClientLayout from './features/ClientLayout';
import Dashboard from '../src/pages/admin/Dashboard';
import Home from '../src/pages/client/Home';
import Blog from './pages/client/Blog';
import Catalogue from './pages/client/Catalogue';
import Course from './pages/client/Course';
import CourseDetails from './pages/client/Details';
import Event from './pages/client/Event';
import Info from './pages/client/Info';
import ProfilePage from './pages/client/Profile';
import SearchCourses from './pages/client/Search';
export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={RouteEnum.HOME}
        element={
          <ClientLayout>
            <Home />
          </ClientLayout>
        }
      />
      <Route
        path={RouteEnum.CATALOGUE}
        element={
          <ClientLayout>
            <Catalogue />
          </ClientLayout>
        }
      />
      <Route
        path={RouteEnum.COURSE}
        element={
          <ClientLayout>
            <Course />
          </ClientLayout>
        }
      />
      <Route
        path={RouteEnum.BLOG}
        element={
          <ClientLayout>
            <Blog />
          </ClientLayout>
        }
      />
      <Route
        path={RouteEnum.EVENT}
        element={
          <ClientLayout>
            <Event />
          </ClientLayout>
        }
      />
      <Route
        path={RouteEnum.INFO}
        element={
          <ClientLayout>
            <Info />
          </ClientLayout>
        }
      />

      <Route
        path={RouteEnum.PROFILE}
        element={
          <AuthLayout>
            <ProfilePage />
          </AuthLayout>
        }
      />

      <Route
        path={RouteEnum.COURSE_DETAILS}
        element={
          <ClientLayout>
            <CourseDetails />
          </ClientLayout>
        }
      />

      <Route
        path={RouteEnum.SEARCH}
        element={
          <ClientLayout>
            <SearchCourses />
          </ClientLayout>
        }
      />

      <Route
        path={RouteEnum.ADMIN}
        element={
          <AuthLayout>
            <Dashboard />
          </AuthLayout>
        }
      />

      <Route
        path={RouteEnum.WILDCARD_PATH}
        element={<Navigate to={RouteEnum.HOME} />}
      />
    </Routes>
  );
};
