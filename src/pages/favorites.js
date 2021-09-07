import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favoritesContext = useContext(FavoritesContext);

    return (
        <section>
            <h1>My Favorites</h1>
            <MeetupList meetups={favoritesContext.favorites} />
        </section>
    );
}

export default FavoritesPage;