import { NavLink } from "react-router-dom"
import styles from './Header.module.css';

const Navigation = () => {
    
    return(
        <nav className= {styles.header}>
            <NavLink to="/">
            <h1 className={styles.title}>Auctioneers</h1>
            </NavLink>
            <div className= {styles.navContainer}>
                <ul className= {styles.navLinks}>
                    <li><NavLink to="/">Hem</NavLink></li>
                    <li><NavLink to="/create">Skapa auktion</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;

