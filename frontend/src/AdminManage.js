import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@material-ui/core';
import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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

const initialValues = {
  lapangan_id: 1,
  luas_lapangan: 200,
  hargasewa:200000,
  tanggaltersedia: new Date("2021-04-19"),
  slotWaktu: "9-11",
  ketersediaan: true,
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
    background: 'linear-gradient(45deg, #519689 50%, #d2cf6f 75%)'
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
  input:{
    padding:40,  
  },
}));

export default function AdminManage() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    const handleSubmit = e =>{
      e.preventDefault();
      Axios.post('http://localhost:8000/lapangan/create',values)
      .then(response => response.status)
      .then(res => {if (res==201) {
          window.alert("Sukses");
          window.location.reload();
      }else{
          window.alert("Gagal");
      }});
      
    }

  return (
    <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <Link href="/admin" variant="inherit" color="inherit">
                BookSal Admin
              </Link>
            </Typography>
            <nav>
                <Link variant="button" color="textPrimary" href="/admin/member" className={classes.link}>
                    Member
                </Link>
                <Link variant="button" color="textPrimary" href="/admin/reward" className={classes.link}>
                    Reward and Loyalty
                </Link>
                <Link variant="button" color="textPrimary" href="/admin/lapangan" className={classes.link}>
                    Lapangan
                </Link>
                <Link variant="button" color="textPrimary" href="/admin/manage" className={classes.link}>
                    Manage
                </Link>
            </nav>
            </Toolbar>
        </AppBar>
        <Typography variant="h4" className={classes.sideinfo}>Buat Lapangan</Typography>
        <form>
            <FormControl className={classes.input}>
                <FormLabel className={classes.title}>Lapangan</FormLabel>
                  <Select
                  name="lapangan_id"
                  label="lapangan_id"
                  value={values.lapangan_id}
                  onChange={handleInputChange}>
                      <MenuItem value={1}>Lapangan 1</MenuItem>
                      <MenuItem value={2}>Lapangan 2</MenuItem>
                      <MenuItem value={3}>Lapangan 3</MenuItem>
                </Select>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <FormLabel className={classes.title}>Tanggal</FormLabel>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id="tanggaltersedia"
                        name="tanggaltersedia"
                        value={values.tanggaltersedia}
                        onChange={date =>handleInputChange(convertToDefEventPara("tanggaltersedia",date))}
                    />
                </MuiPickersUtilsProvider>
                
                <FormLabel className={classes.title}>Waktu</FormLabel>
                <Select
                name="slotWaktu"
                label="slotWaktu"
                value={values.slotWaktu}
                onChange={handleInputChange}>
                    <MenuItem value="9-11">9-11</MenuItem>
                    <MenuItem value="11-13">11-13</MenuItem>
                    <MenuItem value="13-15">13-15</MenuItem>
                    <MenuItem value="15-17">15-17</MenuItem>
                    <MenuItem value="17-19">17-19</MenuItem>
                    <MenuItem value="19-21">19-21</MenuItem>
                </Select>
                     
                
                
            
            <Button onClick={handleSubmit}>Create</Button>
            </FormControl>
        </form>
        <Box mt={5}>
          <Copyright />
        </Box>
    </React.Fragment>
  );
}