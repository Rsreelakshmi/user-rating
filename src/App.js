import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import ProfileDetails from './components/ProfileDetails';
import SimpleTabs from './components/Tabs';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#FFFFFF',
      },
      secondary: {
          main: '#1d83c6',
      },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <header>
        <NavBar/>
        <ProfileDetails />
      </header>
      <div className="App">       
        
        <SimpleTabs />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
