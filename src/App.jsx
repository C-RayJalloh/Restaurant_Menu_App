import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./ui/AppLayout";
import Error from "./utils/Error";
import Menu, { fetchMenu } from "./features/menu/Menu";
import Home from "./utils/Home";
import Cart from "./features/cart/Cart";
import Order, { getOrderLoader} from "./features/order/Order";
import CreateOrder, { createOrderAction } from "./features/order/CreateOrder";



function App() {
 // PAGES ROUTES
 const router = createBrowserRouter([
   {
     // THE PARENT ROUTE OF ALL PAGES
     element: <AppLayout />,
     // ERROR ELEMENT
     errorElement: <Error />,

     // NESTED ROUTES
     children: [
       {
         path: "/",
         element: <Home />,
       },

       {
         path: "/menu",
         element: <Menu />,
         loader: fetchMenu,
         errorElement: <Error />,
       },

       {
         path: "/cart",
         element: <Cart />,
       },

       {
         path: "/order/new",
         element: <CreateOrder />,
         action: createOrderAction,
       },

       {
         path: "/order/:orderId",
         element: <Order />,
         loader: getOrderLoader,
         errorElement: <Error />,
       },
     ],
   },
 ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
