import classes from './MeetupItem.module.css'

function MeetupItem(dynamicData){
    return (
        <li className={classes.meetup_item}>
            <div className={classes.meetup_img}>
                <img src={dynamicData.image} alt={dynamicData.image}/>
            </div>
            <div className={classes.data}>
                <h3>{dynamicData.title}</h3>
                <address>{dynamicData.address}</address>
                <p>{dynamicData.description}</p>
            </div>
            <div className={classes.button}>
                <button>Favorite</button>
            </div>
        </li>
    );
}

export default MeetupItem