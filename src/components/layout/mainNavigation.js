import { Link } from 'react-router-dom'

import classes from './mainNavigation.module.css'

function MainNavigation(){
    return (
        <header className={classes.header}>
            <div>Meetup App</div>
            <nav>
                <ul className={classes.nav_list}>
                    <li>
                        <Link to='/' className={classes.nav_list_item}>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup' className={classes.nav_list_item}>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites' className={classes.nav_list_item}>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;