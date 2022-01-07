import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageLoginSubscribe from './PageLoginSubscribe';
import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';
import { grey } from '@mui/material/colors';


const bg_grey = grey[50]; // really light grey

function App() {
  return (
    <Router>
      <div className="App" styles={{ backgroundColor: bg_grey }}>
        <Switch>
          <Route exact path="/">
            <PageLoginSubscribe />
          </Route>
          <div className="Only_when_logged">
            <Header />
            <Switch>
              <Route path="/home">
                < Home />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
