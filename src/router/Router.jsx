import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import Login from "../pages/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to='/category/0'></Navigate>
            },
           {
            path: "/login",
            element: <Login></Login>
           },
           {
            path: "register",
            element: <Register></Register>
           }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
           
            {
                path: ":id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
                
            }
        ]
    }, 
        {
            path: "news",
            element: <NewsLayout></NewsLayout>,
            children: [
                {
                    path: ":id",
                    element: <PrivateRoute><News></News></PrivateRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
                }
            ]
        },
        {
            path: 'terms',
            element: <Terms></Terms>
        }
])

export default router;

