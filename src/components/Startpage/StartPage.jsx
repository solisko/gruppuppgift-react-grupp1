import React, { useContext, useEffect } from 'react';
import { AuctionContext } from '../../Context/AuctionContextProvider';
import AuctionItem from '../Item/AuctionItem'; // Uppdatera sökvägen vid behov

const StartPage = () => {
  const { auctions, fetchAuctions } = useContext(AuctionContext);

  useEffect(() => {
    fetchAuctions(); // Kör detta när komponenten monteras
  }, []); // Tomma beroenden innebär att effekten bara körs en gång

  return (
    <div>
      <h2>Aktuella Auktioner</h2>
      {auctions.map((auction) => (
        <AuctionItem key={auction.AuctionID} auction={auction} />
      ))}
    </div>
  );
};

export default StartPage;
