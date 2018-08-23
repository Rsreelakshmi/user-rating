import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from '../assets/sukriti.jpg';
import Typography from '@material-ui/core/Typography';

import style from '../stylesheets/tabs.css';

const SkillsRating = () => {
    var skills = [{'skillname':'Documents', 'rating':'blue'}, {'skillname':'Grooming', 'rating':'red'},
     {'skillname':'Estimation', 'rating':'purple'}, {'skillname':'Solution/Design', 'rating':'green'}];
    var rating = "red";
    var skillslist = skills.map(function (skill) {
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
                                    {skill.skillname}
                                </Typography>
                                <Typography variant="caption" component="h4" color="inherit">
                                    07/08/2018
                                </Typography>

                            </div>
                        </div>
                        <div className="rate-skill">
                            <svg width="25" height="25">
                                <circle cx="13" cy="18" r="4.5"
                                stroke={skill.rating} stroke-width="4" fill={skill.rating} />
                                Sorry, your browser does not support inline SVG.
                            </svg>
                            <Typography variant="caption" component="h4" color="inherit">
                                    Poor
                                </Typography>
                        </div>
                    </Toolbar> 
            </AppBar>;
    });
    return (
        <div style={style}>
            {skillslist }
        </div>
    )
}
export default SkillsRating;