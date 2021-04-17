import React, {useState, useEffect} from 'react';
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
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@material-ui/core';
import Axios from 'axios';

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

async function getData(){
  const response = await Axios.get('http://localhost:8000/pelanggan/getone',{params:{username_pelanggan:localStorage.getItem('username_pelanggan')}});
  return response.data;
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

const Reward = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);



  //login things
  const [username_pelanggan, setUser] = useState(localStorage.getItem('username_pelanggan') || '');
  const [isLoggedIn, setLoggedIn] = useState(username_pelanggan!=='');
  const [data, setData] = useState('');

  const handleLogoutClick = (e) =>{
    localStorage.removeItem('username_pelanggan');
    window.location.reload();
  }

  const renderAuthButton = ()=>{
    if(isLoggedIn){
      return <Button color="primary" variant="outlined" className={classes.link} onClick={handleLogoutClick}>Logout</Button>
    } else{
      return <Button href="/login" color="primary" variant="outlined" className={classes.link}>Login</Button>
    }
  }
  useEffect(()=>{
    let mounted = true;
    getData()
      .then(items => {
        if(mounted) {
          setData(items)
        }
      })
    return () => mounted = false;
  },[])
  

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
            <Typography color="textPrimary">{username_pelanggan}</Typography>
            {renderAuthButton()}
            </Toolbar>
        </AppBar>
        
        <Typography variant="h4" className={classes.sideinfo}>Reward and Loyalty</Typography>
        <Typography variant="h5" className={classes.sideinfo}>Poin anda:</Typography>
        <Typography variant="h5" className={classes.sideinfo}>{JSON.stringify(data.poin)}</Typography>
        
        <Box mt={5}>
          <Copyright />
        </Box>
    </React.Fragment>
  );
}

export default Reward;