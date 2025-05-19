import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Toaster } from "react-hot-toast"; // Make sure to import Toaster from react-hot-toast

import Home from "./pages/Home";
import Login from "./pages/login";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Prospects from "./pages/Prospects";
import Prospect from "./pages/Prospect";
import Donor from "./pages/Donor";
import NewDonor from "./pages/NewDonor";
import Menu from "./components/Menu";
import './index.css';
import Joinus from "./components/joinus";
import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";

// Component to protect routes
const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  return user.currentUser ? children : <Navigate to="/login" />;
};

// Layout for admin routes
const Layout = () => {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex-1 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  const user = useSelector((state) => state.user);

  const router = useMemo(() => createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Donor",
      element: <Donor />,
    },
    {
      path: "/Aboutus",
      element: <Aboutus />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin",
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        { path: "/admin", element: <Admin /> },
        { path: "/admin/donors", element: <Donors /> },
        { path: "/admin/prospects", element: <Prospects /> },
        { path: "/admin/prospect/:id", element: <Prospect /> },
        { path: "/admin/newdonor", element: <NewDonor /> },
        { path: "/admin/donor/:id", element: <Donor /> },
      ],
    },
  ]), [user.currentUser]);

  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
