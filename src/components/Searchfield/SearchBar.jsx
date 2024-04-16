import { useState, useContext, useEffect } from 'react';
import { AuctionContext } from '../../Context/AuctionContextProvider';
import { useNavigate } from 'react-router-dom';
import styles from '../Searchfield/searchbar.module.css'

function SearchBar() 
    { const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const { fetchAuctions} = useContext(AuctionContext);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchAuctions(searchTerm);
        navigate('/searchresults');
    };

    return (
        
        <form className={styles.searchContainer} onSubmit={handleSearch}>
            <input type="text" placeholder='Sök Auktioner'
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput} />
            <button type='submit' className={styles.searchButton}>Sök</button>  
        </form>
        
    );
}
export default SearchBar; 