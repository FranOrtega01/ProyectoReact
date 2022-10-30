import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useAuth } from '../../Context/AuthContext';
import {Link, useNavigate } from 'react-router-dom'

export const Dashboard = () => {

    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        setError('')
        try {
            await logout()
            navigate('/login')
        } catch{
            setError('Hubo un error al cerrar sesión')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4 mt-4 text-decoration-underline'>Mi Perfil</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <div className='w-100'>
                        <strong>Email:</strong> {currentUser.email}
                    </div>
                    <div className='w-100'>
                        <strong>Usuario:</strong> {currentUser.displayName}
                    </div>

                    <Link to={'/update-profile'} className=' btn btn-primary w-100 mt-3'>Actualizar perfil</Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
