import React from 'react'
import './userContainer.scss'
import Container from "react-bootstrap/Container";

export const UserContainer = ({children}) => {
    return (
        <Container className='mt-5 d-flex aling-items-center justify-content-center' style={{minHeight: '70vh'}}>
            <div className='w-100' style={{maxWidth: '400px'}}>
                {children}
            </div>
        </Container>
    )
}
