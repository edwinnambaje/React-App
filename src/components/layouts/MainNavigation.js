import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
            <nav>
                <ul>
                    <li>
                    <Link to='/'>All Meetups</Link>
                    <Link to='/new'>New Meetups</Link>
                    <Link to='/fav'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}
export default MainNavigation;