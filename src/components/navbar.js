import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';





function Navbar() {

    return (
        <AppBar position="static" style={{background:'#85144b'}}>
          <Toolbar>
            <IconButton  color="inherit" aria-label="Menu">
            </IconButton>
            <Typography variant="h6" color="inherit" >
                Sous-Chef
            </Typography>
        
            <IconButton>

            </IconButton>
              


          </Toolbar>
        </AppBar>

    );


}

export default  Navbar;
