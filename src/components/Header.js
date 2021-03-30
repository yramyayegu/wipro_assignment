import React from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "../App.css"

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>

          <Typography variant="h6" color="inherit" noWrap>
            ABC Company
          </Typography>
        </Toolbar>
      </AppBar>
    </>)
}
export default Header