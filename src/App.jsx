import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./ui/AppLayout";
import Home, { fetchMenu } from "./features/menu/Menu";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/CreateOrder";
import CreateOrder from "./features/order/CreateOrder";



function App() {
 // PAGES ROUTES
 const router = createBrowserRouter([
   {
     // THE PARENT ROUTE OF ALL PAGES
     element: <AppLayout />,
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
       },

       {
         path: "/cart",
         element: <Cart />,
       },

       {
         path: "/order/new",
         element: <Order />,
       },

       {
         path: "/order/:id",
         element: <CreateOrder />,
       },
     ],
   },
 ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
