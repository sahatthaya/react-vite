import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sheet from '@mui/joy/Sheet';
import { Typography } from '@mui/material';

class Post extends Component {
    render() {
        return (
            <Sheet variant="outlined" sx={{ p: 4, border: '1px solid #E0DEE4', borderRadius: '15px', mt: 5 }} >
                <Typography variant='h4'>{this.props.post.title}</Typography>
                <Typography>{this.props.post.message}</Typography>
                <div style={{ marginTop: '1%', display: 'flex', justifyContent: 'end' }}>
                    <button onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })} style={{ width: '15%', backgroundColor: '#f0ad4e' }}>Edit</button>
                    <button onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })} style={{ marginLeft: '1%', width: '15%', backgroundColor: '#d9534f' }}>Delete</button>
                </div>
            </Sheet>
        )
    }
}

export default connect()(Post);