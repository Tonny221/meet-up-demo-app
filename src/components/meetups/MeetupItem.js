import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

function MeetupItem(dynamicData) {
    return (
        <li>
            <Card>
                <div>
                    <img src={dynamicData.image} alt={dynamicData.image} />
                </div>
                <div className={classes.data}>
                    <h3>{dynamicData.title}</h3>
                    <address>{dynamicData.address}</address>
                    <p>{dynamicData.description}</p>
                </div>
                <div className={classes.button}>
                    <button>Favorite</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem