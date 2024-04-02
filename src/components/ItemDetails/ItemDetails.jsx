export default function ItemDetails() {
  return (
    <div>
      <div>
        <h1>{auctionID.Title}</h1>
        {/* <img className={styles.image} src="" alt="" /> */}
        <h3>{auctionID.Description}</h3>
        {/* <p>
          Starttid budgivning:
          <br />
          {formatDateTime(auction.StartDate)}
        </p>
        <p>
          Sluttid budgivning:
          <br />
          {formatDateTime(auction.EndDate)}
        </p> */}
        <h3>Start pris: {auctionID.StartingPrice}</h3>
        <button>Lägg nytt bud</button>
        <section>
          <h2>Alla bud:</h2>
          <table>
            <thead>
              <tr>
                <th>Bud</th>
                <th>Budgivare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>300</td>
                <td>Sofia</td>
              </tr>
            </tbody>
          </table>
        </section>
        <p>Upplagd av {auctionID.CreatedBy}</p>
      </div>
    </div>
  );
}
