import { useState } from "react";

function SearchOrder() {
  const [query, setSearchQuery] = useState("");

   function handleSubmit(e) {
    e.preventDefault();
     alert(`You searched for ${query}`)
   }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order "
        value={query}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
