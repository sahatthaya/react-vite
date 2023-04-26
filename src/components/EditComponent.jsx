import React, { Component } from 'react'
import { connect } from 'react-redux';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/material/TextField';

class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage,
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }

    render() {
        return (
            <Sheet variant="outlined" sx={{ p: 4, border: '1px solid #E0DEE4', borderRadius: '15px', mt: 5 }}>
                <form className="form" onSubmit={this.handleEdit}>
                    <TextField
                        sx={{ width: '100%' }}
                        id="outlined-basic" label="Enter post title" variant="outlined" placeholder='enter post title' name="" required
                        inputRef={(input) => this.getTitle = input}
                        defaultValue={this.props.post.title}
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
                        defaultValue={this.props.post.message}
                    />
                    <br /><br />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <button style={{ marginTop: '1%', width: '15%', backgroundColor: '#5bc0de' }}>Update</button>
                    </div>
                </form>
            </Sheet>
        )
    }
}

export default connect()(EditComponent);