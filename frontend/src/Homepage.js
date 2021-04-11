import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BookingForm from './BookingForm';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © K08'}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    background: 'linear-gradient(45deg, #009688 30%, #a2cf6e 90%)'
  },
  toolbarTitle: {
    flexGrow: 1,
    color: 'white'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  sideinfo: {
    margin: theme.spacing(2, 4),
  },
  card: {
    margin: theme.spacing(5, 15),
  },
}));

const App = () => {
  const classes = useStyles();

  //login things
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogoutClick = (e) =>{
    e.preventDefault();
    //call logout api
  }

  const renderAuthButton = ()=>{
    if(isLoggedIn){
      return <Button color="primary" variant="outlined" className={classes.link} onClick={handleLogoutClick}>Logout</Button>
    } else{
      return <Button href="/login" color="primary" variant="outlined" className={classes.link}>Login</Button>
    }
  }
  return (
    <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <Link href="/" variant="inherit" color="inherit">
                BookSal
              </Link>
            </Typography>
            <nav>
                <Link variant="button" color="textPrimary" href="/booking" className={classes.link}>
                    Booking Saya
                </Link>
                <Link variant="button" color="textPrimary" href="/reward" className={classes.link}>
                    Reward and Loyalty
                </Link>
            </nav>
            {renderAuthButton()}
            </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={6}>
          <Typography variant="h4" className={classes.sideinfo}>Nama Lapangan Futsal</Typography>
          <Typography variant="body1" className={classes.sideinfo}>Alamat</Typography>
          <img src="https://4.bp.blogspot.com/-FoKOxTkDKiI/Vz1KsTvuH7I/AAAAAAAAATw/np2bzyi_ihUDppMhzLxHuQ3ALb283LMcwCLcB/s1600/LapanganFutsal%2BVinyl.jpg"
            alt="lapangan futsal" width="600" length="400" className={classes.sideinfo}/>  
          </Grid>
          <Grid item xs={6}>
            <Card variant="outlined" className={classes.card}>
            <BookingForm/>
            </Card>
          </Grid>  
        </Grid>
        
        <Box mt={5}>
          <Copyright />
        </Box>
    </React.Fragment>
  );
}

export default App;