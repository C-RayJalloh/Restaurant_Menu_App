import { Outlet } from "react-router-dom"
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";


// THE PARENT ROUTE
function AppLayout() {

    return (
        <div>
            <Header />
           
            <main>
                <h1>Welcome to resto</h1>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    )
}

export default AppLayout
