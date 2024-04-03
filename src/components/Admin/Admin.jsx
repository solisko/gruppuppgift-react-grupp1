import { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import AuctionRow from './AuctionRow';
import OffAuctions from './OffAuctions';

function Admin() {

    const [auctionsData, setAuctionsData] = useState([])
    useEffect(() => getAuctions(),[]);

    const getAuctions = () => {

        fetch('https://auctioneer.azurewebsites.net/auction/1zyx')
        .then((response) => response.json())
        .then((result) => {
            setAuctionsData(result)
        })
        .catch(error => console.error('Det gick inte att hämta auktioner'));
    }
    

    return(
        <div className={styles.table}>
            <h3>Aktuella auktioner</h3>
            <table>
                <thead>
                    <tr>
                        <th>Auktioner</th>
                        <th>Nuvarande bud</th>
                        <th>Slutdatum</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        auctionsData.filter((auction) => {
                            const endDate = new Date(auction.EndDate)
                            const today = new Date()
                            return(
                                endDate > today
                            )
                        }).map((auction) => {
                            
                            return(
                            <AuctionRow key={auction.AuctionID} auction={auction} />
                        )})
                    }
                </tbody>
            </table>
            <h3>Avslutade auktioner</h3>
            <table>
                <thead>
                    <tr>
                        <th>Auktioner</th>
                        <th>Slutpris</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        auctionsData.filter((auction) => {
                            const endDate = new Date(auction.EndDate)
                            const today = new Date()
                            return(
                                endDate < today
                            )
                        }).map((auction) => {
                            
                            return(
                            <AuctionRow key={auction.AuctionID} auction={auction} />
                        )})
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Admin;