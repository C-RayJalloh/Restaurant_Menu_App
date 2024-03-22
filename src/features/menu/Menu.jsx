/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apis/apiRestaurant.js";
import MenuItem from "../menu/MenuItem.jsx";


function Menu() {
  const menuData = useLoaderData();
  console.log(menuData);
  // console.log("hs")

 
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

