import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Features/Home/Home.Layout';
import Login from '../Features/SecureRoutes/Login.Layout';
import SecureView from '../Features/SecureRoutes/Secure.Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SecureView>
        <Home />
      </SecureView>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
