import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const Axios = require('axios');

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © K08 '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://d10dnch8g6iuzs.cloudfront.net/picture/96420200220173453419)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSide = () => {
  const classes = useStyles();

  const [values, setValues] = useState([]);
  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({
        ...values,
        [name]:value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    //const response = login()
    Axios.post('http://localhost:8000/pelanggan/login',
    values,
    {headers:{
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin': '*',
    }})
    .then(response => response.status)
    .then(res => {if (res==200) {
      window.alert("Login Sukses");
      window.location.replace("/"); 
      localStorage.setItem("username_pelanggan",values.username_pelanggan); 
    }else{
      window.alert("Login Gagal");
    }});
    //window.alert(response.status);
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Masuk sebagai member
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username_pelanggan"
              label="Username"
              name="username_pelanggan"
              autoFocus
              defaultValue={values.username_pelanggan}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              defaultValue={values.password}
              onChange={handleInputChange}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Belum terdaftar? Klik untuk mendaftar"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignInSide;