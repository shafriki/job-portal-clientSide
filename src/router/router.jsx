import MainLayout from "../layouts/MainLayout";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Authentication/Login.jsx";
import Register from "../pages/Authentication/Register.jsx";
import Home from "../pages/Home/Home.jsx";
import JobDetails from "../pages/JobDetail/JobDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import JobApply from "../jobApply/JobApply.jsx";
import MyApplications from "../myApplications/MyApplications.jsx";
import AddJob from "../AddJob/AddJob.jsx";



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
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,

        },
        {
          path: '/addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
          path: '/myApplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
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