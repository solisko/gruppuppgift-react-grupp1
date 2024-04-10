import styles from './Admin.module.css';
import AuctionRow from './AuctionRow';
import React, { useContext } from 'react';
import { AuctionContext } from '../../Context/AuctionContextProvider';

function Admin() {
    const { auction } = useContext(AuctionContext);

    if (!auction) {
        return <div>Hittar inga auktioner...</div>;
      }
      console.log(auction);
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
                        auction.filter((auction) => {
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
                        auction.filter((auction) => {
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