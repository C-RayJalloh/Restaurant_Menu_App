/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apis/apiRestaurant.js";
import MenuItem from "../menu/MenuItem.jsx";
// import { useEffect, useState } from "react";
// import { v4 as uuidv9 } from 'uuid';

function Menu() {
  const menuData = useLoaderData();
  console.log(menuData);
  console.log("hs")
// const [ menuData, setmenuData] = useState("Testing")
  
// useEffect(() => {
//   async function fetchData() {
//     const res = await fetch(' https://react-fast-pizza-api.onrender.com/api/menu'); // Fetch data from the API
//     const {data} = await res.json(); // Extract JSON from the response
//     console.log(data); // Log the data to the console
//     setmenuData(data)
//   }
  
//   fetchData(); // Call the fetchData function
// }, []); // Empty dependency array means this effect runs once, on component mount

 
return (
  <ul>
    {menuData.map((menu, index) => (
      <MenuItem key={index} menu={menu} />
))}
  </ul>
);
}
 
// an HTTP/REST API WITH THE REACT ROUTER LOADER
export async function fetchMenu () {
     const menuData   = await getMenu();
   return menuData;
}








export default Menu;

