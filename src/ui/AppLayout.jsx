/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loading from "./Loading";

// THE PARENT ROUTE
function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading"
  return (
    <div className="layout">
    {isLoading && <Loading />}

      {/* LAYOUT */}
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

export default AppLayout;
