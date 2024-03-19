/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apis/apiRestaurant";


function Menu() {
  const data = useLoaderData();
  console.log(data); // Output the fetched data

  return <h1>Menu</h1>;
}

export function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;
