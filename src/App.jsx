import { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import "./style.scss";

import Navbar from "./Components/Navbar/Navbar";
import Leftbar from "./Components/Leftbar/Leftbar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { DarkModeContext } from "./context/DarkModeContext";
import { TokenContext } from "./context/TokenContext"; // ✅ import

function App() {
  const { DarkMode } = useContext(DarkModeContext);
  const { Token } = useContext(TokenContext); // ✅ get token from context
  const queryClient = new QueryClient();

  // Layout wrapper
  const Layout = () => {
    return (
      <div className={`theme-${DarkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  // Protected route for logged-in users
  const ProtectedRoute = ({ children }) => {
    if (!Token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  // Prevent auth pages if logged in
  const ProtectedAuth = ({ children }) => {
    if (Token) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/register",
      element: (
        <ProtectedAuth>
          <Register />
        </ProtectedAuth>
      ),
    },
    {
      path: "/login",
      element: (
        <ProtectedAuth>
          <Login />
        </ProtectedAuth>
      ),
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
