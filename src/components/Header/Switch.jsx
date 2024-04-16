import { Routes, Route } from 'react-router-dom';
import StartPage from '../Startpage/StartPage';
import AddAuction from "../Add/AddAuction"
import ItemDetails from '../ItemDetails/ItemDetails';
import SearchResults from '../Search/SearchResults';

const Switch = () => {
    return (
        <Routes>
            <Route path='/' exact element={<StartPage />} />
            <Route path='/create' exact element={<AddAuction/>} />
            <Route path='/details' exact element={<ItemDetails/>} />
            <Route path='/searchresults' exact element={<SearchResults />}></Route>
        </Routes>
    );
}

export default Switch;