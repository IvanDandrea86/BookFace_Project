import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useContext} from 'react';
//Component
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer";
//Pages
import PageLoginSubscribe from "./Pages/RegisterLogin/RegisterLogin";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import MyProfile from "./Pages/UserProfile/UserProfile";
import NotFound from "./Pages/NotFound";
import FindingFriends from "./Pages/SearchResult";
//Theme
import { grey } from "@mui/material/colors";
import { AuthContext } from "./Context/auth-context";
import ErrorMessage from "./Util/ErrorMessage";
import Friends from './Component/Friends'
import Chat from "./Component/Chat";
import Message from "./Component/Message";





const bg_grey = grey[50]; // really light grey





const App = () => {
  const context=useContext(AuthContext)

  return (
   
    <Router>

       <Header />
      <div className="App" styles={{ backgroundColor: bg_grey }}>
        <Switch>
          {!context.auth ? (
            <Route exact path="/">
              <PageLoginSubscribe />
            </Route>
          ) : null}
         
        
        </Switch>
        <Switch>
        <Route exact path="/" component={ErrorMessage} />
        <Route path="/home" component={Home} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/friend" component={Friends} />
        <Route path="/message" component={Message} />
        <Route path="/chat" component={Chat} />
        
        <Route path="/finding" component={FindingFriends} />
        <Route path="*" component={NotFound} />
        
         </Switch>
        <Footer />
      </div>

    </Router>
    
  );
};

export default App;
