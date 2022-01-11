import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageLoginSubscribe from './PageLoginSubscribe';
import Home from './Home';
import Profile from './PageProfile';
import MyProfile from './PageMyProfile';
import NotFound from './NotFound';
import { grey } from '@mui/material/colors';
import FindingFriends from './PageFindingFriends';

import {Auth} from "./util/isAuthApollo";

const bg_grey = grey[50]; // really light grey

const App=() => {

  //Use Auth
  const user=Auth();
  console.log(user.id);

  return ( 
     
    <Router>
      <div className="App" styles={{ backgroundColor: bg_grey }}>
        <Switch>
          <Route exact path="/">
            <PageLoginSubscribe />
          </Route>
          <div className="Only_when_logged" sx={{ minHeigth: "100%", mb: 1,  position: 'relative'}} >
            <Header />
            <Switch>
                <Route path="/home">
                  < Home />
                </Route>
                <Route path="/myprofile">
                  <MyProfile />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/finding">
                  <FindingFriends />
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
