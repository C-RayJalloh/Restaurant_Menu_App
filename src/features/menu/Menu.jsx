/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apis/apiRestaurant.js";
import MenuItem from "../menu/MenuItem.jsx";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
     {menu.map((pizza) => {
    <MenuItem key={pizza.id} pizza={pizza} />
     })}
    </ul>
  );
}
 
export async function loader() {
  const data = await getMenu();
  return data;
}


export default Menu;

