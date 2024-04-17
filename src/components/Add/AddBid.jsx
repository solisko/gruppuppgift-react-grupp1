import { useState, useContext } from "react";
import { AuctionContext } from "../../Context/AuctionContextProvider";
import styles from "./addbid.module.css";

function AddBid({ auctionId, startingPrice, onBidAdded }) {
  const { bids } = useContext(AuctionContext);
  const [Amount, setAmount] = useState("");
  const [Bidder, setBidder] = useState("");
  const [error, setError] = useState("");

  const handleAddBid = async () => {
    const newBidAmount = parseFloat(Amount);

    const highestBid = bids.reduce((maxBid, bid) => {
      return bid.Amount > maxBid ? bid.Amount : maxBid;
    }, 0);

    if (newBidAmount <= highestBid || newBidAmount < startingPrice) {
      setError(
        "För lågt bud."
      );
      return;
    }

    const bidData = {
      Amount: newBidAmount,
      AuctionID: auctionId,
      Bidder,
    };

    try {
      const response = await fetch(
        `https://auctioneer2.azurewebsites.net/bid/1zyx/`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(bidData),
        }
      );

      if (!response.ok) {
        throw new Error("Error placing bid");
      }
      console.log("Bid was added successfully!");
      onBidAdded({ Amount: newBidAmount, Bidder });
      setAmount("");
      setBidder("");
      setError("");
    } catch (error) {
      console.error("There was an error creating the auction:", error.message);
    }
  };return (
    <div className={styles.addbidWrapper}>
      <label htmlFor="bid">Nytt bud</label>
      <input
        type="number"
        placeholder="Summa..."
        value={Amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <label htmlFor="creator">Lagt av:</label>
      <input
        type="text"
        placeholder="Skriv ditt namn..."
        value={Bidder}
        onChange={(e) => setBidder(e.target.value)}
        required
      />
      <br />
      <button onClick={handleAddBid}>Lägg bud</button>
    </div>
  );
}

export default AddBid;