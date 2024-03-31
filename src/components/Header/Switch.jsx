import { Routes, Route } from 'react-router-dom';
import AddAuction from "../Add/AddAuction"
import ListAuctions from '../List/ListAuctions';

// För att se om länkarna fungerar, ska sedan läggas in i egna pages-komponenter
// const Home = () => <h1>Välkommen till Auctioneers</h1>
// const Create = () => <h1>Skapa ny auktion</h1>

const Switch = () => {
    return (
        <Routes>
            <Route path='/' exact element={<ListAuctions />} />
            <Route path='/create' exact element={<AddAuction/>} />
        </Routes>
    );
}

export default Switch;