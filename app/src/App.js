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
import NotFound from "./Pages/404/NotFound";
import FindingFriends from "./Pages/Search/SearchResult";
//Theme
import { grey } from "@mui/material/colors";
import { AuthContext } from "./Context/auth-context";
import ErrorMessage from "./Util/ErrorMessage";

import AcceptFriends from "./Pages/AcceptFriends";

import Chat  from "./Pages/Chatbox/Chatbox";





const bg_grey = grey[50]; // really light grey





const App = () => {
  const context=useContext(AuthContext)

  return (
   
    <Router>

       
      <div className="App" style={{backgroundColor: "#fcfcfc"}}>
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
        <Route path="/requests" component={AcceptFriends} />
        <Route path="/message" component={Chat} />
        <Route path="/finding" component={FindingFriends} />
        {context.auth ? ( <Route path="*" component={NotFound} />) : null}
        </Switch>
     
        
 
      </div>
      <Footer /> 
    </Router>
    
  );
};

export default App;
