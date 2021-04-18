import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
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

async function getList(){
  const response = await Axios.get('http://localhost:8000/reservasi/getall')
  return response.data
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
}));

export default function AdminHome() {
  const classes = useStyles();
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  function BookingList() {
    return (
      <TableContainer component={Paper} style={{margin:35,width:'90%'}}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Lapangan</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Total Harga</TableCell>
              <TableCell>Metode Pembayaran</TableCell>
              <TableCell>Tanggal Sewa</TableCell>
              <TableCell>Waktu Sewa</TableCell>
              <TableCell>Timestamp Reservasi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((el)=>(
              <TableRow key={el._id}>
                <TableCell align="left">{el.lapangan_id}</TableCell>
                <TableCell align="left">{el.username_pelanggan}</TableCell>
                <TableCell align="left">{el.totalHarga}</TableCell>
                <TableCell align="left">{el.metodePembayaran}</TableCell>
                <TableCell align="left">{el.tanggaltersedia}</TableCell>
                <TableCell align="left">{el.slotWaktu}</TableCell>
                <TableCell align="left">{el.timestampReservasi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
  
        </Table>
      </TableContainer>
    );
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
            </nav>
            </Toolbar>
        </AppBar>
        <Typography variant="h4" className={classes.sideinfo}>List Booking</Typography>
        <BookingList/>
        <Box mt={5}>
          <Copyright />
        </Box>
    </React.Fragment>
  );
}