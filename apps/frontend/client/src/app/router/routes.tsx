import { RouteObject } from 'react-router-dom';
import { routes } from '@blog/frontend/shared';
import { Main } from '@blog/frontend/pages';

export type Route = Omit<RouteObject, 'children'>;
export type PrivateRoute = Route;

export const privateRoutes: PrivateRoute[] = [];

export const publicRoutes: Route[] = [
  {
    path: routes.main.path,
    element: <Main />,
  },
];
