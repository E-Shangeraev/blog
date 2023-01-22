import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { buildRouter } from '../router';

const router = buildRouter();

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
