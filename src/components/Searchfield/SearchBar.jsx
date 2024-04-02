import { useState, useContext } from 'react';
import { AuctionContext } from '../../Context/AuctionContextProvider';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const { fetchAuctions} = useContext(AuctionContext);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchAuctions(searchTerm);

    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Sök Auktioner'
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit'>Sök</button>  
        </form>
        
    );
}
export default SearchBar; 