import { Outlet } from "react-router-dom"
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";



// THE PARENT ROUTE
function AppLayout() {
    // const [apiData, setApiData] = useState([]);

    // useEffect(() => {
    //   fetch("/api/data")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data); // Optional: Log the fetched data
    //       setApiData(data.menu); // Set the fetched data to the state variable
    //     })
    //     .catch((error) => console.error('Error fetching data:', error)); // Handle fetch errors
    // }, []);
  
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
