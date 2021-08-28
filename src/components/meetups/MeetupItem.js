function MeetupItem(dynamicData){
    return (
        <li>
            <div>
                <img src={dynamicData.image} alt={dynamicData.image}/>
            </div>
            <div>
                <h3>{dynamicData.title}</h3>
                <address>{dynamicData.address}</address>
                <p>{dynamicData.description}</p>
            </div>
            <div>
                <button>Favorite</button>
            </div>
        </li>
    );
}

export default MeetupItem