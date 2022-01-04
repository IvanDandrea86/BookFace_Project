import React from 'react'
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'; 

function Header() {
    return <div className="header">
        <div className="header__left">
            <img
                src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
                alt=""
            />
            <div className='header__input'>
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__middle">
            <div className="header__option">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SubscriptionsIcon fontSize="large" />
            </div>
            <div className="header__option">
                <StorefrontIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
        </div>


                <div className="header__right"></div>
            </div>;

}

            export default Header;

            // 42:53 video//