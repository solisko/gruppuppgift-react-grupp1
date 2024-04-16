import React, { useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import AuctionItem from "../Item/AuctionItem";
import styles from '../Startpage/startpage.module.css'

const SearchResults = () => {
  const { auctions } = useContext(AuctionContext);

  console.log(auctions);

  return (
    <div className={styles.pageContainer}>
      <h2>Sökresultat</h2>
      <div className={styles.auctionListContainer}>
      {auctions.length ? (
        auctions.map((auction) => (
          <AuctionItem key={auction.AuctionID} auction={auction} />
        ))
      ) : (
        <p>Inga auktioner hittades.</p>
      )}
      </div>
    </div>
  );
};

export default SearchResults;
