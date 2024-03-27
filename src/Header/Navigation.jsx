import { NavLink } from "react-router-dom"
import styles from './Header.module.css';

const Navigation = () => {
    
    return(
        <nav className= {styles.header}>
            <h1>Auctioneers</h1>
            <ul className= {styles.navLinks}>
                <li><NavLink to="/">Hem</NavLink></li>
                <li><NavLink to="/create">Skapa auktion</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;