import { FormControl, FormControlLabel, FormLabel, Menu, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const initialValues = {
    bookDate: new Date(),
    startTime: 10,
    endTime: 11,
    field: 'a',
    isAvailable: false,
    paymentMethod: 'gopay',
}

export default function BookingForm(){

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

    return (
        <form>
            <FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <FormLabel>Tanggal</FormLabel>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="bookDate"
                        name="bookDate"
                        value={values.bookDate}
                        onChange={date =>handleInputChange(convertToDefEventPara("bookDate",date))}
                    />
                </MuiPickersUtilsProvider>
                
                <FormLabel>Waktu Mulai</FormLabel>
                <Select
                name="startTime"
                label="startTime"
                value={values.startTime}
                onChange={handleInputChange}>
                    <MenuItem value={10}>10.00</MenuItem>
                    <MenuItem value={11}>11.00</MenuItem>
                    <MenuItem value={12}>12.00</MenuItem>
                    <MenuItem value={13}>13.00</MenuItem>
                    <MenuItem value={14}>14.00</MenuItem>
                    <MenuItem value={15}>15.00</MenuItem>
                    <MenuItem value={16}>16.00</MenuItem>
                    <MenuItem value={17}>17.00</MenuItem>
                    <MenuItem value={18}>18.00</MenuItem>
                    <MenuItem value={19}>19.00</MenuItem>
                    <MenuItem value={20}>20.00</MenuItem>
                    <MenuItem value={21}>21.00</MenuItem>
                    <MenuItem value={22}>22.00</MenuItem>
                </Select>
                
                <FormLabel>Waktu Akhir</FormLabel>
                <Select
                name="endTime"
                label="endTime"
                value={values.endTime}
                onChange={handleInputChange}>
                    <MenuItem value={10}>10.00</MenuItem>
                    <MenuItem value={11}>11.00</MenuItem>
                    <MenuItem value={12}>12.00</MenuItem>
                    <MenuItem value={13}>13.00</MenuItem>
                    <MenuItem value={14}>14.00</MenuItem>
                    <MenuItem value={15}>15.00</MenuItem>
                    <MenuItem value={16}>16.00</MenuItem>
                    <MenuItem value={17}>17.00</MenuItem>
                    <MenuItem value={18}>18.00</MenuItem>
                    <MenuItem value={19}>19.00</MenuItem>
                    <MenuItem value={20}>20.00</MenuItem>
                    <MenuItem value={21}>21.00</MenuItem>
                    <MenuItem value={22}>22.00</MenuItem>
                </Select>             
                
                <FormLabel>Lapangan</FormLabel>
                <RadioGroup row
                name="field"
                value={values.field}
                onChange={handleInputChange}>
                    <FormControlLabel value ="a" control={<Radio/>} label="Lapangan A"/>
                    <FormControlLabel value ="b" control={<Radio/>} label="Lapangan B"/>
                </RadioGroup>
                
                <FormLabel>Metode pembayaran</FormLabel>
                <RadioGroup row
                name="paymentMethod"
                value={values.paymentMethod}
                onChange={handleInputChange}>
                    <FormControlLabel value ="gopay" control={<Radio/>} label="Gopay"/>
                    <FormControlLabel value ="ovo" control={<Radio/>} label="OVO"/>
                    <FormControlLabel value ="linkaja" control={<Radio/>} label="LinkAja"/>
                </RadioGroup>
            </FormControl>
        </form>
    )
}