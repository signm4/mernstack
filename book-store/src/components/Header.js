import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
    return ( 
        <div>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography>
                        <LibraryBooksIcon/>
                    </Typography>

                    <Tabs textcolor="inherit"
                        indicatorColor="secondary"
                        value = {value}
                        onChange={(e, val)=>setValue(val)}>

                        <Tab LinkComponent={NavLink} to="/books" label = "Books"/>
                        <Tab LinkComponent={NavLink} to="/add"  label='Add Product'/>
                        <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
                        <Tab LinkComponent={NavLink} to="/books_avail" label='Available Books'/>
                        <Tab LinkComponent={NavLink} to="/books_unavail" label='UnAvailable Books'/>
                    </Tabs>
                </Toolbar>

            </AppBar>
        </div>
    );
};

export default Header;