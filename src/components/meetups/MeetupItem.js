import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
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
                    <button>Favorite</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem