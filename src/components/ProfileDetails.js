import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from '../assets/sukriti.jpg';
import Typography from '@material-ui/core/Typography';
import style from '../stylesheets/profile.css';

const ProfileDetails = () => {
    return(
        <div className="profile-details" style={style} >
        <AppBar position="static" id="tabs">
            <Toolbar>
            <Avatar
                alt="Adelle Charles"
                src={avatarImage}
                className = "avatar bigAvatar"
            />
            <div id="profiledetail">
                <Typography  id="profilename" variant="subheading" component="h4" color="inherit">
                    Sukriti
                </Typography>            
                <Typography  variant="caption" component="h4" color="inherit">
                    singhsukriti94@gmail.com
                </Typography>
            </div>         
            <div className="load-more-options">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
            </div>      
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default ProfileDetails;