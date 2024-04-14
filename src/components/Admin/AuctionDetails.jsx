import { useState, useContext, useEffect } from 'react';
import { AuctionContext } from "../../Context/AuctionContextProvider";

const AuctionDetails = ({ auction, handleDelete }) => {
  const [hasBids, setHasBids] = useState(false);

  const endDate = new Date(auction.EndDate);

  //TODO Lägga in i context provider?
  const fetchBids = () => {
    fetch(`https://auctioneer2.azurewebsites.net/bid/1zyx/${auction.AuctionID}`)
    .then((res) => res.json())
    .then((result) => setHasBids(result.length > 0));
  }

  useEffect(() => {
    fetchBids();
  }, [])

  return (
    <tr key={auction.AuctionID}>
      <td>{auction.Title}</td>
      <td>{hasBids ? 'Har bud' : 'Inga bud'}</td>
      <td>{endDate.toLocaleDateString('sv-SE')}</td>
      {
        (hasBids) 
        ? ''
        : (<td><button onClick={handleDelete}>Radera</button></td>)
      }
    </tr>
  );
}

export default AuctionDetails;