import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from '../assets/sukriti.jpg';
import Typography from '@material-ui/core/Typography';

import style from '../stylesheets/tabs.css';

const Myteam = () => {
    var names = ['Jake', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster'];
    var teammembers = names.map(function (name) {
        return <AppBar position="static" id="teammember">
                    <Toolbar>
                        <Avatar
                            alt="Adelle Charles"
                            src={avatarImage}
                            className="avatar bigAvatar"
                        />
                        <div>
                            <div id="profiledetail">
                                <Typography id="profilename" variant="subheading" component="h4" color="inherit">
                                    {name}
                                </Typography>
                                <Typography variant="caption" component="h4" color="inherit">
                                    singhsukriti94@gmail.com
                                </Typography>

                            </div>
                        </div>
                        <div className="rate-skill">
                            <Button variant="contained" color="secondary" >
                                Rate Skill
                            </Button>
                        </div>
                    </Toolbar> 
            </AppBar>;
    });
    return (
        <div style={style}>
            {teammembers}
        </div>
    )
}
export default Myteam;