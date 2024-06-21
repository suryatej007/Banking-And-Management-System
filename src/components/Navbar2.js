import React from "react";
import './Navbar2.css';
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

function Navbar2() {
  const classes = useStyles();

  return (
    <AppBar position= "static" color= 'primary' >
      <Toolbar>
        <Typography variant="h5" className="logo" align="center" >
        <span className="seperator"> |</span> SSB BANKING
        </Typography>
          <div className={classes.navlinks}>
        

            
    
            

            
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar2;