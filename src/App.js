import { Route } from 'react-router-dom'

import AllMeetUpsPage from './pages/allMeetUps';
import FavoritesPage from './pages/favorites';
import NewMeetUpPage from './pages/newMeetUp';

function App() {
  return (
    <div>
      <Route path='/'>
        <AllMeetUpsPage />
      </Route>
      <Route path='/new-meet-up'>
        <NewMeetUpPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </div>
  );
}

export default App;
