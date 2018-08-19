import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from '../assets/sukriti.jpg';
import Typography from '@material-ui/core/Typography';
import style from '../stylesheets/tabs.css';

const Rateskill = () => {
   return (
        <div style={style}>
            <div className="back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
                    <path fill="none" d="M0 0h24v24H0z" />
                </svg>
                <Typography id="backtext" variant="subheading" component="h3" color="inherit">
                    Back
                </Typography>
            </div>
            <div className="skillname">
                <Avatar
                    alt="Adelle Charles"
                    src={avatarImage}
                    className="avatar bigAvatar skillpic"
                />
                <div class="skilldetail">
                    <Typography id="profilename" variant="headline" color="inherit">
                        Estimation
                    </Typography>

                </div>
            </div>
            <div className="rateicons">
                <svg width="50" height="50" class="rateicon">
                    <circle cx="25" cy="25" r="10"
                        stroke="red" stroke-width="4" fill="red" />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <svg width="50" height="50" class="rateicon">
                    <circle cx="25" cy="25" r="10"
                        stroke="yellow" stroke-width="4" fill="yellow" />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <svg width="50" height="50" class="rateicon">
                    <circle cx="25" cy="25" r="10"
                        stroke="green" stroke-width="4" fill="green" />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <svg width="50" height="50" class="rateicon">
                    <circle cx="25" cy="25" r="10"
                        stroke="teal" stroke-width="4" fill="teal" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <Typography id="profilename" variant="subheading" color="inherit">
                                Comments
                    </Typography>
            <Card className="commentscard">            
                <CardContent>                        
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                            <br />
                           {'"a benevolent smile"'}
                    </Typography>
                </CardContent>                
            </Card>
        </div>
    )
}
export default Rateskill;