import React from "react";
import './Navbar.css';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(19),
    display: "flex",
  },
 logo: {
    flexGrow: "2",
    cursor: "pointer",
  },
  link: {

    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(9),
    "&:hover": {
      transition: "all 0.3s",
      color: "black",
      borderBottom: "2px solid white",
  
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position= "static" color= 'primary' >
      <Toolbar>
        <Typography variant="h5" className="logo" align="center" >
        <span className="seperator"> |</span> SSB BANKING
        </Typography>
          <div className={classes.navlinks}>
          <Link to="/Home" className={classes.link}>
             HOME
             <span className="seperator">  |</span>
            </Link>
        

            <Link to="/Transactions" className={classes.link}>
              TRANSACTIONS <span className="seperator"> |</span>
            </Link>
               <Link to="/Aboutus" className={classes.link}>
              ABOUTUS <span className="seperator"> |</span>
            </Link>
               <Link to="/ContactUs" className={classes.link}>
              CONTACT <span className="seperator"> |</span>
            </Link>
            <Link to="/Dashboard" className={classes.link}>
              SERVICES <span className="seperator"> |</span>
            </Link>

            <Link to="/" className={classes.link}>
              LOGOUT <span className="seperator"> </span>
            </Link>
            
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;