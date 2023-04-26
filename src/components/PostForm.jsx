import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Sheet from '@mui/joy/Sheet';
import { connect } from 'react-redux';
import { Typography } from '@mui/material';


class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }

        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = ""
        this.getMessage.value = ""
    }
    render() {
        return (
            <Sheet variant="outlined" sx={{ p: 4, border: '1px solid #E0DEE4', borderRadius: '15px', mt: 5 }} >
                <Typography variant='h5'>Create Post</Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        sx={{ width: '100%' }}
                        id="outlined-basic" label="Enter post title" variant="outlined" placeholder='enter post title' name="" required
                        inputRef={(input) => this.getTitle = input}
                    />
                    <br /><br />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Enter post"
                        multiline
                        minRows={5}
                        maxRows={5}
                        sx={{ width: '100%' }}
                        placeholder='enter post'
                        required
                        inputRef={(input) => this.getMessage = input}
                    />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <button style={{ marginTop: '1%', width: '15%', backgroundColor: '#096BDE' }} >
                            Post
                        </button>
                    </div>
                </form>
            </Sheet>
        )
    }
}

export default connect()(PostForm)
