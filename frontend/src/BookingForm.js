import { Button, FormControl, FormControlLabel, FormLabel, makeStyles, Typography, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Axios from 'axios';

const initialValues = {
    lapangan_id: 1,
    tanggaltersedia: new Date("2021-04-19"),
    slotWaktu: "9-11",
    username_pelanggan: localStorage.getItem('username_pelanggan'),
    totalHarga: 200000,
    metodePembayaran: 'gopay',
    timestampReservasi: new Date(),
}

const useStyles = makeStyles((theme)=>({
    input:{
        padding:40,
        
    },
    title:{
        marginTop:5,
    },
}))

export default function BookingForm(){

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
        Axios.post('http://localhost:8000/reservasi/create',values)
        .then(response => response.status)
        .then(res => {if (res==201) {
            window.alert("Reservasi Sukses");
            window.location.reload();
        }else{
            window.alert("Reservasi Gagal");
        }});
        
      }

    return (
        <form>
            <FormControl className={classes.input}>
            <Typography>Booking</Typography>
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
            
                
                <FormLabel className={classes.title}>Metode pembayaran</FormLabel>
                <Select
                name="metodePembayaran"
                label="metodePembayaran"
                value={values.metodePembayaran}
                onChange={handleInputChange}>
                    <MenuItem value="gopay">Gopay</MenuItem>
                    <MenuItem value="ovo">OVO</MenuItem>
                    <MenuItem value="linkaja">LinkAja</MenuItem>
                    <MenuItem value="tunai">Tunai</MenuItem>
                </Select>
            <Button onClick={handleSubmit}>PESAN</Button>
            </FormControl>
        </form>
    )
}