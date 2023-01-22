import { Suspense } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { publicRoutes } from './routes';
import { ui } from '@blog/frontend/shared';

const { Layout } = ui;

export function buildRouter() {
  const unprotectedRoutes = publicRoutes.map(
    ({ index, path, element, errorElement }) => {
      return (
        <Route
          key={path}
          path={path}
          index={index}
          errorElement={errorElement}
          element={
            <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
          }
        />
      );
    }
  );

  return createBrowserRouter(
    createRoutesFromElements([
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
          </Suspense>
        }
      >
        {unprotectedRoutes}
      </Route>,
    ])
  );
}
