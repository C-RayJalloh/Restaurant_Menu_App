/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
function MenuItem({ menu }) {
  const { id, name, price, ingredients, soldOut, imgUrl } = menu;

  return (
    <li >
      <img src={imgUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients}</p>
        <div>
          {!soldOut ? <p>{price}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
