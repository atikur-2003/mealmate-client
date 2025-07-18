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
                path: 'payment',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>
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
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'add-meal',
                Component: AddMeal
            },
            {
                path: 'admin-profile',
                Component: AdminProfile
            }
        ]
    }
])