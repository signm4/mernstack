import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Box, FormLabel, TextField, FormControlLabel, Checkbox,} from '@mui/material'

const BookDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    console.log(id);
    useEffect(() => {
        const fetchHandler = async() =>{
            await axios
                .get(`http://localhost:5000/books/${id}`)
                .then(res=>console.log(res.data))
                
        };
        fetchHandler().then((data)=>setInputs(data.book));
     }, [id])
     const handleSubmit = (e) => {
        e.preventDefault();
     }
     const handleChange = (e) => {
        console.log(e);
     }
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <Box
            display ="flex"
            flexDirection = "column"
            justifyContent = {"center"}
            maxWidth = {700}
            alignContent = {"center"}
            alignSelf = "center"
            marginLeft = {"auto"}
            marginRight = "auto"
            marginTop = {10}
            >
                <FormLabel>Check Out</FormLabel>
                <p>Enter Name, if checking in leave Blank</p>
                <TextField
                    value={inputs.who}
                    onChange={handleChange}
                    margin = "normal"
                    fullWidth
                    varaint="outlined"
                    name="who"
                    />
                <p>Checking In (Available)</p>
                <FormControlLabel
                    control={
                        
                        <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        />
                    }
                    />
            </Box>
        </form>
    </div>
  )
}

export default BookDetail