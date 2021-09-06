import MeetupList from '../components/meetups/MeetupList'

import { useState, useEffect } from 'react';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(
        () => {
            setIsLoading(true);

            fetch('https://boxwood-well-317919-default-rtdb.firebaseio.com/meetups.json').then(
                (response) => {
                    response.json();
                }
            ).then(
                (data) => {
                    const meetups = [];

                    for (const key in data ) {
                        const meetup = {
                            id: key,
                            ...data[key]
                        };

                        meetups.push(meetup)
                    }

                    setIsLoading(false);
                    setLoadedMeetups(meetups);
                }
            );
        }, []
    );

    if (isLoading) {
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