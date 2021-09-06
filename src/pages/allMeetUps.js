import MeetupList from '../components/meetups/MeetupList'

import { useState } from 'react';

function AllMeetupsPage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ loadedMeetups, setLoadedMeetups ] = useState([])
    
    fetch('https://boxwood-well-317919-default-rtdb.firebaseio.com/meetups.json').then(
        response => {
            response.json();
        }
    ).then(
        data => {
            setIsLoading(false);
            setLoadedMeetups(data);
        }
    );

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>Cool cities</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;