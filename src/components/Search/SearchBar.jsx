import { useState, useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import { useNavigate } from "react-router-dom";
import styles from '../Search/searchbar.module.css'

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchAuctions } = useContext(AuctionContext);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAuctions(searchTerm, true);
    setSearchTerm("")
    navigate("/searchresults");
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Sök Auktioner"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />
      <button className={styles.button} type="submit">Sök</button>
    </form>
  );
}
export default SearchBar;
