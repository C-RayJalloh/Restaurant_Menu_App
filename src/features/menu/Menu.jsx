/* eslint-disable react-refresh/only-export-components */
// import { useLoaderData } from "react-router-dom";
// import { getMenu } from "../../apis/apiRestaurant.js";
import MenuItem from "../menu/MenuItem.jsx";
import { useEffect, useState } from "react";

function Menu() {
//   const menu = useLoaderData();
//   console.log(menu);
//   console.log("hs")
const [ menuData, setmenuData] = useState("Testing")
  
useEffect(() => {
  async function fetchData() {
    const res = await fetch('/api/data'); // Fetch data from the API
    const data = await res.json(); // Extract JSON from the response
    console.log(data); // Log the data to the console
  }
  
  fetchData(); // Call the fetchData function
}, []); // Empty dependency array means this effect runs once, on component mount

 
  return (
    <ul>
     <li>{menuData}</li>

    </ul>
  );
}
 
// // an HTTP/REST API
// export async function fetchMenu () {
//   const res = await fetch('api/data/menu');
//    const data   = await res.json();
//    return data;
// }





export default Menu;

