import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonPinRoundedIcon from '@mui/icons-material/PersonPinRounded';
import SearchBar from "../SearchBar";
import { useHistory }from 'react-router-dom';
import {
  useMutation,
  gql
} from "@apollo/client";
import { Auth } from '../../Util/isAuthApollo';


const LOGOUT_MUT= gql`
mutation{logout}
`;

export default function PrimarySearchAppBar() {
  

  const user=Auth();
  console.log(user.id);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [logout] = useMutation(LOGOUT_MUT);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const logoutEvent = async (event) => {
    event.preventDefault();
     await logout()
    history.push("/")
    history.go(+1) 
    window.location.reload(false);
  };

  const handleMobileMenuClose = () => {
    
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    console.log("pressed")
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      sx={{px:2}} 
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem type="button" href="/myprofile">
        
          <AccountCircle 
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="/myprofile" 
          sx={{mr:2}}/>
      

        <p>Profile</p>
      </MenuItem>
     
      <MenuItem type="button" onClick={logoutEvent}
          >
        
         <ExitToAppIcon 
         size="large"
         aria-label=""
         color="inherit"
         onClick={logoutEvent}
         href="/"
         sx={{mr:2}}/>
  
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  // sx={{ flexGrow: 1 }}
  return (
    <Box className="header" >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            href="/home"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <PersonPinRoundedIcon />
          </IconButton>
          <Typography
            href="/home"
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            BOOKFACE
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="large"
              aria-label=""
              color="inherit"
              href="/"
              onClick={logoutEvent}
             
            >
                <ExitToAppIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              href="/myprofile"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
