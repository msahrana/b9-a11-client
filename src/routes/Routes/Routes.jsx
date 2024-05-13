import {createBrowserRouter} from "react-router-dom";
import Root from "../../layout/Root/Root";
import ErrorPage from "../../error/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AddJobs from "../../pages/AddJobs/AddJobs";
import AppliedJobs from "../../pages/AppliedJobs/AppliedJobs";
import MyJobs from "../../pages/MyJobs/MyJobs";
import AllJobs from "../../pages/AllJobs/AllJobs";
import JobDetails from "../../pages/JobDetails/JobDetails";
import Blogs from "../../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addJobs",
        element: <AddJobs></AddJobs>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
