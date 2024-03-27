import { Routes, Route } from 'react-router-dom';


// För att se om länkarna fungerar, ska sedan läggas in i egna pages-komponenter
const Home = () => <h1>Välkommen till Auctioneers</h1>
const Create = () => <h1>Skapa ny auktion</h1>

const Switch = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/create' exact element={<Create />} />
        </Routes>
    );
}

export default Switch;