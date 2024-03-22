
// const API_URL = "/api";

// export async function fetchData() {
  //   const response = await fetch('https://menu-apiendpoint.onrender.com/api/data');
  //   if (!response.ok) {
    //     throw new Error('Failed to fetch data');
    //   }
    //   return response.json();
    // }
    
    // https://react-fast-pizza-api.onrender.com/api


    const API_URL = '/api';

export async function getMenu() {

   
  const res = await fetch(`${API_URL}/data`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu data');
  // destructure menudata from the object api
  const {menuData }  = await res.json();
  return menuData;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { menuData } = await res.json();
  return menuData;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { menuData } = await res.json();
    return menuData;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the menuData, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
