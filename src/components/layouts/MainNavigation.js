import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}><span>ED</span>WIN</div>
            <nav>
                <ul>
                    <li>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/blogs'>BLOGS</Link>
                    <Link to='/contact'>CONTACT</Link>
                    <Link to='/login'>SIGNIN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}
export default MainNavigation;