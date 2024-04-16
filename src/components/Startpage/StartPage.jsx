import React, { useContext, useEffect } from 'react';
import { AuctionContext } from '../../Context/AuctionContextProvider';
import AuctionItem from '../Item/AuctionItem'; 
import styles from '../Startpage/startpage.module.css'

const StartPage = () => {
  const { auctions, fetchAuctions } = useContext(AuctionContext);

  useEffect(() => {
    fetchAuctions(); 
  }, []); 

  return (
    <div className={styles.pageContainer}>
      <h2>Aktuella Auktioner</h2>
      <div className={styles.auctionListContainer}>
      {auctions.map((auction) => (
        <AuctionItem key={auction.AuctionID} auction={auction} />
      ))}
      </div>
    </div>
  );
};

export default StartPage;
