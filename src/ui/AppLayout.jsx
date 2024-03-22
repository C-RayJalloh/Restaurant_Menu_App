import { Outlet } from "react-router-dom"
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";



// THE PARENT ROUTE
function AppLayout() {
   
  
    return (
      <div>
        {/* Your JSX */}
        <Header />
        <main>
          {/* Render the fetched data */}
          <h1>Welcome</h1>
          <Outlet />
        </main>
        <CartOverview />
      </div>
    );
  }
  

export default AppLayout
