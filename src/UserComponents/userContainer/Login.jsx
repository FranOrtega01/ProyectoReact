import React , {useRef, useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import './userContainer.scss';
import { useAuth } from '../../Context/AuthContext';
import {Link, useNavigate } from 'react-router-dom'


export const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4 mt-4'>Ingresá</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form className='SignUpForm' onSubmit={handleSubmit}>
                    <Form.Group className='mt-2 w-100' id='signEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' required ref={emailRef}/>
                    </Form.Group>
                    <Form.Group className='mt-2 w-100' id='signPassword'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type='password' required ref={passwordRef}/>
                    </Form.Group>
                    <Button disabled={loading} className='mt-4 w-50 SignUpBtn'  type='submit'>Ingresá</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to={'/forgot-password'}>¿Olvidaste tu contraseña?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            ¿Todavía no tenés una cuenta? <Link to={'/signup'}>Registrate</Link>
        </div>
        </>
    )
}
