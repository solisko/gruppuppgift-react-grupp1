import { useState, useEffect } from 'react';

function AuctionRow(props) {

    const auction = props.auction;
    const endDate = new Date(auction.EndDate);
    const [bids, setBids] = useState([]);
    const [maxBid, setMaxBid] = useState (null);
    useEffect(() => getAuctionDetails(), []);
    
    const getAuctionDetails = () => {

        fetch('https://auctioneer2.azurewebsites.net/bid/1zyx/' + auction.AuctionID)
        .then((response) => response.json())
        .then((result) => {
            setBids(result)
            if (result.length === 0){
                setMaxBid(null);
            }
            else {
                setMaxBid(Math.max(...result.map(bid => bid.Amount)))
            }
        })
        .catch(error => console.error('Det gick inte att hämta auktioner'));
    } 
    

 return(
        <tr>
            <td>{auction.Title}</td>
            <td>{maxBid}</td>
            <td>{endDate.toLocaleString('sv-SE')}</td>
            <td>{
                (maxBid === null)
                ? (<button>Radera</button>)
                : (<></>)
                }</td>
        </tr>
    )   
}

export default AuctionRow;