import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import Test from "./pages/Test"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, TEST_ROUTE, BASKET_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    // {
    //     path: ADMIN_ROUTE +'/adding_page',
    //     Component: AddingPage
    // }

]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: BASKET_ROUTE + '/:id',
        Component: Basket
    },
    {
        path: TEST_ROUTE,
        Component: Test
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    }
]