import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/allMeetUps';
import FavoritesPage from './pages/favorites';
import NewMeetupPage from './pages/newMeetUp';
import Layout from './components/layout/Layout'


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
