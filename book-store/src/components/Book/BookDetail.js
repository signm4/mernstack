import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { Box, FormLabel, TextField, FormControlLabel, Checkbox, Button} from '@mui/material'

const BookDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    // console.log(id);
    useEffect(() => {
        const fetchHandler = async() =>{
            await axios
                .get(`http://localhost:5000/books/${id}`)
                .then((res)=>res.data)
                .then(data=>setInputs(data.book));
                
        };
        fetchHandler();
     }, [id])

     const sendRequest = async() => {
        await axios.put(`http://localhost:5000/books/${id}`,{
            who: String(inputs.who),
            avail: Boolean(checked),
            due: String(inputs.due)
        }).then(res=>res.data)
     }
     const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/books"));
     };
     const handleChange = (e) => {
        // console.log(e);
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
     };
    //  console.log(inputs);
    return (
    <div>
        
        {inputs &&(

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
                        checked={inputs.avail}
                        onChange={() => setChecked(!checked)}

                        />
                    }
                    label = "Available"
                />
                <FormLabel>Due Date</FormLabel>
                <p>Enter Date 2 weeks from today, if checking in leave Blank</p>
                <TextField
                    value={inputs.due}
                    onChange={handleChange}
                    margin = "normal"
                    fullWidth
                    varaint="outlined"
                    name="due"
                    />

                    <Button variant='contained' type="submit">
                        Update
                    </Button>
            </Box>
        </form>)}
    </div>
  )
}

export default BookDetail