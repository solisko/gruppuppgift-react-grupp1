import React, { useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import AuctionItem from "../Item/AuctionItem";

const SearchResults = () => {
  const { auctions } = useContext(AuctionContext);

  console.log(auctions);

  return (
    <div>
      <h2>Sökresultat</h2>
      {auctions.length ? (
        auctions.map((auction) => (
          <AuctionItem key={auction.AuctionID} auction={auction} />
        ))
      ) : (
        <p>Inga auktioner hittades.</p>
      )}
    </div>
  );
};

export default SearchResults;
