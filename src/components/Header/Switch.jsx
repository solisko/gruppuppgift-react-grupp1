import { Routes, Route } from 'react-router-dom';
import StartPage from '../Startpage/StartPage';
import AddAuction from "../Add/AddAuction"
import ListAuctions from '../List/ListAuctions';
import ItemDetails from '../ItemDetails/ItemDetails';
import Admin from '../Admin/Admin';
import SearchResults from '../Search/SearchResults';


// För att se om länkarna fungerar, ska sedan läggas in i egna pages-komponenter
// const Home = () => <h1>Välkommen till Auctioneers</h1>
// const Create = () => <h1>Skapa ny auktion</h1>

const Switch = () => {
    return (
        <Routes>
            <Route path='/' exact element={<StartPage />} />
            <Route path='/create' exact element={<AddAuction/>} />
            <Route path='/admin' exact element={<Admin/>} />
            <Route path='/details' exact element={<ItemDetails/>} />
            <Route path='/searchresults' exact element={<SearchResults />}></Route>
        </Routes>
    );
}

export default Switch;