import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import style from '../stylesheets/tabs.css';
import Myteam from './Myteam';
import SkillsRating from './Hardskills';
import Rateskill from './Rateskill';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
class SimpleTabs extends React.Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <AppBar position="static" className="tabs">
                <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab className="taboption" label="My Skills" />
                        <Tab className="taboption" label="My Team" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    {/* <SkillsRating /> */}
                    <Rateskill />
                    </TabContainer>}
                {value === 1 && <TabContainer><Myteam /></TabContainer>}
                </div>
        </AppBar>
      );
    }
  }
  
export default SimpleTabs;