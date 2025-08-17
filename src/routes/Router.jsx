import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/authPages/Login";
import Register from "../pages/authPages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AddMeal from "../pages/dashboardPages/AddMeal";
import MealDetails from "../pages/MealDetails";
import AdminProfile from "../pages/dashboardPages/AdminProfile";
import Meals from "../pages/Meals";
import Payment from "../pages/Payment";
import AllMeals from "../pages/dashboardPages/AllMeals";
import AllReviews from "../pages/dashboardPages/AllReviews";
import UserDashboardLayout from "../layouts/UserDasboardLayout";
import AdminRoute from "./AdminRoute";
import MyProfile from "../pages/userPages/MyProfile";
import RequestedMeal from "../pages/userPages/RequestedMeal";
import MyReviews from "../pages/userPages/MyReviews";
import MyPayments from "../pages/userPages/MyPayments";
import ManageUsers from "../pages/dashboardPages/ManageUsers";
import UpcomingMeals from "../pages/UpcomingMeals";
import AdminUpcomingMeals from "../pages/dashboardPages/AdminUpcomingMeals";
import ServeMeal from "../pages/dashboardPages/ServeMeal";
import ErrorPage from "../pages/ErrorPage";
import AdminOverview from "../pages/dashboardPages/AdminOverview";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'meal/:id',
                Component: MealDetails
            },
            {
                path: 'meals',
                Component: Meals
            },
            {
                path: 'payment/:packageName',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: 'upcoming-meals',
                Component: UpcomingMeals
            }
            
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children:[
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        //admin dashboard
        path: '/dashboard/admin',
        element:<AdminRoute><DashboardLayout></DashboardLayout></AdminRoute>,
        children:[
            {
                path: 'admin-profile',
                Component: AdminProfile
            },
            {
                path:'overview',
                Component: AdminOverview
            },
            {
                path:'add-meal',
                Component: AddMeal
            },
            
            {
                path: 'all-meals',
                Component: AllMeals
            },
            {
                path: 'all-reviews',
                Component: AllReviews
            },
            {
                path: 'manage-users',
                Component: ManageUsers
            },
            {
                path:'upcoming-meals',
                Component: AdminUpcomingMeals
            },
            {
                path: 'serve-meal',
                Component: ServeMeal
            }
        ]
    },
    {
        //user dashboard
        path:'dashboard/user',
        element:<PrivateRoute><UserDashboardLayout></UserDashboardLayout></PrivateRoute>,
        children:[
            {
                path:'my-profile',
                Component: MyProfile
            },
            {
                path:'requested-meal',
                Component: RequestedMeal
            },
            {
                path:'my-reviews',
                Component: MyReviews
            },
            {
                path:'my-payments',
                Component: MyPayments
            }

        ]
    },
    {
    path: '*',
    Component: ErrorPage
  }
])