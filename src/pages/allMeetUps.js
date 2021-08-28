import MeetupList from '../components/meetups/MeetupList'
import MeetupItem from '../components/meetups/MeetupItem'

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Marseille',
        image: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/10-9c.jpg',
        address: 'Italy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae neque fermentum ante eleifend convallis.'
    },
    {
        id: 'm2',
        title: 'Tokyo',
        image: 'https://coisasdojapao.com/wp-content/uploads/2017/03/Tokyo-Main-Image.jpg',
        address: 'Japan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae neque fermentum ante eleifend convallis.'
    }
];

function AllMeetupsPage() {
    return (
        <section>
            <h1>Cool cities</h1>
            <ul>
                
            </ul>
        </section>
    );
}

export default AllMeetupsPage;