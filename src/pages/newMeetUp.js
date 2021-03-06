import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useHistory } from 'react-router-dom'

function NewMeetupPage() {
    const history = useHistory()

    function addMeetupHandler(meetupData) {
        fetch('https://boxwood-well-317919-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        });
    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;