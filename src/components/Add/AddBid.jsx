import { useState } from 'react'

function AddBid({auctionId}) {
    const [bidAmount, setBidAmounts] = useState("")
    const [bidder, setBidder] = useState("")

    const buttonHandler = async () => {
  
      try {
          const response = await fetch(`https://auctioneer2.azurewebsites.net/bid/1zyx/`, {
              method: 'POST',
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({
                  AuctionID: auctionId,
                  Amount: bidAmount,
                  Bidder: bidder,
                  GroupCode: "1zyx"
              })
          });
  
          if (!response.ok) {
            throw new Error("Error placing bid");
              
          }
          window.location.reload();
      } catch (error) {
          alert("Budet är för lågt");
      }
  }
  
    
    return (
    <div>
        <p>Lägg bud</p>
        <input 
            type="number" 
            value={bidAmount}
            onChange={(e) => setBidAmounts(e.target.value)}
            required
        />
        <p>Budgivare</p>
        <input 
            type="text" 
            value={bidder}
            onChange={(e) => setBidder(e.target.value)}
            required
        />
        <br />
      <button onClick={buttonHandler}>Lägg bud</button>
    </div>
  )
}

export default AddBid;