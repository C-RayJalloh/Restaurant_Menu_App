/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apis/apiRestaurant.js";
import MenuItem from "../menu/MenuItem.jsx";
import { useEffect, useState } from "react";


function Menu() {
  // const menuData = useLoaderData();
  // console.log(menuData);
  // // console.log("hs")

 

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMenu();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

return (
  <ul>
    {menuData.map((menu, index) => (
      <MenuItem key={index} menu={menu} />
))}
  </ul>
);
}
 
// FETCHING THE API WITH THE REACT ROUTER LOADER
export async function fetchMenu () {
     const menuData   = await getMenu();
   return menuData;
}








export default Menu;

