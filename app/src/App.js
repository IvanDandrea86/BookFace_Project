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
import AcceptFriends from "./Pages/AcceptFriends";





const bg_grey = grey[50]; // really light grey





const App = () => {
  const context=useContext(AuthContext)

  return (
   
    <Router>

       
      <div className="App" >
        <Switch>
          {!context.auth ? (
            <Route exact path="/">
              <PageLoginSubscribe />
            </Route>
          ) : null}
        
        {context.auth ? (
            <Header />
            ) : null}
        </Switch>
        <Switch>
        {context.auth ? (
        <Route exact path="/" component={ErrorMessage} /> ) : null}
        <Route path="/home" component={Home} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/friend" component={Friends} />
        <Route path="/message" component={Message} />
        <Route path="/requests" component={AcceptFriends} />
        <Route path="/chat" component={Chat} />
        
        <Route path="/finding" component={FindingFriends} />
        {context.auth ? ( <Route path="*" component={NotFound} />) : null}
        
         </Switch>
        <Footer /> 
      </div>

    </Router>
    
  );
};

export default App;
