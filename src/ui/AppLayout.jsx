import { Outlet } from "react-router-dom"
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { useEffect, useState } from "react";


// THE PARENT ROUTE
function AppLayout() {
 const [ apiData, setapiData] = useState("testing")

  useEffect( () => {
    fetch("/api/data")
    .then((res) => res.json())
    .then((data) => console.log(data));
  })

    return (
        <div>
            <Header />
           
            <main>
                <h1>{apiData}</h1>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    )
}

export default AppLayout
