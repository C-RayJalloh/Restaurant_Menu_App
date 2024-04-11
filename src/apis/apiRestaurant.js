/* eslint-disable no-unused-vars */


// resto API DATA 
// https://resto-api-wxln.onrender.com/api/menuData

const API_URL = '/api';

export async function getMenu() {

   
  // GET THE DATA FROM THE API
  const res = await fetch(`${API_URL}/menuData`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu data');
  // destructure menudata from the object api
  const menu   = await res.json();
  return menu;
}

// FETCH THE DATA FROM THE API
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const order = await res.json();
  return order;
}

// CREATE NEW ORDER
export async function createOrder() {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const newOrder = await res.json();
    return newOrder;
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
