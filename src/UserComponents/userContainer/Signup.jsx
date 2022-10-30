import React , {useRef, useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import './userContainer.scss';
import { useAuth } from '../../Context/AuthContext';
import {Link, useNavigate } from 'react-router-dom'



export const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { signup } = useAuth()
    const navigate = useNavigate()


    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match!')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4 mt-4'>Registrate</h2>
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
                    <Form.Group className='mt-2 w-100' id='signEmail'>
                        <Form.Label>Confirmá contraseña</Form.Label>
                        <Form.Control type='password' required ref={passwordConfirmRef}/>
                    </Form.Group>
                    <Button disabled={loading} className='mt-4 w-50 SignUpBtn'  type='submit'>Registrate</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            ¿Ya tenés una cuenta? <Link to={'/login'}>Ingresá</Link>
        </div>
        </>
    )
}
