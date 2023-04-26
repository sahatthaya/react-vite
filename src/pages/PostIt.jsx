import React from 'react'
import PostForm from "../components/PostForm"
import AllPost from "../components/AllPost"
import { Container } from '../styles/layoutStyled'

function PostIt() {
    return (
        <Container>
            <div style={{marginTop:'60px'}}>Post It!</div>
            <hr />
            <p>
                They are commonly used for writing short messages, reminders, to-do lists, or other notes, and can be easily attached and removed from surfaces such as desks, walls, or notebooks. Sticky notes are a popular tool for organization, brainstorming, and communication in both personal and professional settings.
            </p>
            <PostForm />
            <AllPost />
        </Container>
    )
}

export default PostIt