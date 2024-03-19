import { Outlet } from "react-router-dom"
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { useEffect, useState } from "react";


// THE PARENT ROUTE
function AppLayout() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
      fetch("/api/data")
        .then((res) => res.json())
        .then((data) => {
          console.log(data); // Optional: Log the fetched data
          setApiData(data.menu); // Set the fetched data to the state variable
        })
        .catch((error) => console.error('Error fetching data:', error)); // Handle fetch errors
    }, []);
  
    return (
      <div>
        {/* Your JSX */}
        <Header />
        <main>
          {/* Render the fetched data */}
          <h1>Data from API:</h1>
          <ul>
          {Array.isArray(apiData) && apiData.map((item, index) => (
  <li key={index}>
    {/* Render the properties of each item */}
    <p>Name: {item.menu.name}</p>
    {/* Add more properties as needed */}
  </li>
))}
          </ul>
          <Outlet />
        </main>
        <CartOverview />
      </div>
    );
  }
  

export default AppLayout
