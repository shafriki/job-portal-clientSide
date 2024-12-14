import MainLayout from "../layouts/MainLayout";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Authentication/Login.jsx";
import Register from "../pages/Authentication/Register.jsx";
import Home from "../pages/Home/Home.jsx";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1 className="text-6xl font-bold text-center mt-60">Error page.</h1>,
      children: [
        {
          path:'/home',
          element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;