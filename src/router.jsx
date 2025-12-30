import {
    createBrowserRouter
} from "react-router-dom";

import { Main } from "./components/Main";
import { SessionsList } from "./components/SessionsList";
import {Login} from "./components/Login";
import {AdminPage} from "./components/AdminPage";
import {Hall} from "./components/Hall";
import {Payment} from "./components/Payment";
import {Ticket} from "./components/Ticket";


export const router = createBrowserRouter([
    {
        path: "/DiplomProject/",
        exact: true,
        element: <Main/>,
        children: [
            {
                index: true,
                exact: true,
                element: <SessionsList/>,
            },
            {
                path: "/DiplomProject/login",
                exact: true,
                element: <Login/>,
            },
            {
                path: "/DiplomProject/admin",
                exact: true,
                element: <AdminPage/>,
            },
            {
                path: "/DiplomProject/hall",
                exact: true,
                element: <Hall/>,
            },
            {
                path: "/DiplomProject/payment",
                exact: true,
                element: <Payment/>,
            },
            {
                path: "/DiplomProject/ticket",
                exact: true,
                element: <Ticket/>,
            },
        ]
    },
]);