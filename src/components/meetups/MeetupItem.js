import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoriteContext = useContext(FavoritesContext);

    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    function toggleFavorite(){
        if(itemIsFavorite){
            favoriteContext.removeFavorite(props.id)
        } else{
            favoriteContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                adress: props.adress,
            });
        }
    }

    return (
        <li>
            <Card>
                <div>
                    <img src={props.image} alt={props.image} />
                </div>
                <div className={classes.data}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.button}>
                    <button onClick={toggleFavorite}>Favorite</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem