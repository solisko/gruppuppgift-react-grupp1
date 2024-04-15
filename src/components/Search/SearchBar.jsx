import { useState, useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchAuctions } = useContext(AuctionContext);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAuctions(searchTerm, true);
    navigate("/searchresults");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Sök Auktioner"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Sök</button>
    </form>
  );
}
export default SearchBar;
