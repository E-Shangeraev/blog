import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

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
      <Route element={<div>Layout</div>}>{unprotectedRoutes}</Route>,
    ])
  );
}
