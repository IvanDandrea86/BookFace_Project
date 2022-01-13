import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import { Auth } from "./Util/isAuthApollo";
import Box from '@mui/material/Box';



import ErrorMessage from "./Util/ErrorMessage";

import { createContext } from "react";


const bg_grey = grey[50]; // really light grey





const App = () => {
  const user = Auth();

  return (
   
    <Router>
      <Box className="App" styles={{ backgroundColor: bg_grey }}>  
        <Switch>
          {!user.id ? (
            <Route exact path="/">
              <PageLoginSubscribe />
            </Route>
          ) : null}
         <Box className="main" sx={{position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column"}}>
          <Header />
          <Switch>
            <Route exact path="/" component={ErrorMessage} />
            <Route path="/home" component={Home} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/profile:id" component={Profile} />
            <Route path="/finding" component={FindingFriends} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Box>
        </Switch>

      </Box>
    </Router>
    
  );
};

export default App;
