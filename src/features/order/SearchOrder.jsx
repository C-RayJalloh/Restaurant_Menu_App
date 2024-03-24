import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setSearchQuery] = useState("");
  const navigate = useNavigate()

   function handleSubmit(e) {
    e.preventDefault();
    if(!query) return
    alert(`You searched for ${query}`)
    navigate(`/order/${query}`)
    setSearchQuery('')
   }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order 😋 "
        value={query}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
