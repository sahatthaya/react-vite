import React from 'react'
import TextField from '@mui/material/TextField';

function SearchBox({ searchfield, searchChange }) {
    return (
        <>
            <TextField
                sx={{ width: '100%' }}
                id="outlined-basic" label="Enter post title" variant="outlined"  name="" required
                type="search"
                placeholder="search cats"
                onChange={searchChange}
            />
        </>
    )
}

export default SearchBox