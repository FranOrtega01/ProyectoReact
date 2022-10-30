import React , {useRef, useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useAuth } from '../Context/AuthContext';
import {Link} from 'react-router-dom'


export const ForgotPassword = () => {
    const emailRef = useRef()

    const [error, setError] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [loading, setLoading] = useState(false)
    const { resetPassword} = useAuth()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            setMensaje('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMensaje('¡Te enviamos instrucciones a tu email!')
        } catch {
            setError('¡Hubo un error al restablecer la contraseña!')
        }
        setLoading(false)
    }

    return (
    <>
    <Card>
        <Card.Body>
            {/* <h2 className='text-center mb-4 mt-4'>Ingresá</h2> */}
            {error && <Alert variant='danger'>{error}</Alert>}
            {mensaje && <Alert variant='success'>{mensaje}</Alert>}
            <Form className='SignUpForm' onSubmit={handleSubmit}>
                <Form.Group className='mt-2 w-100' id='signEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' required ref={emailRef}/>
                </Form.Group>
                <Button disabled={loading} className='mt-4 w-90 SignUpBtn'  type='submit'>Restablecer contraseña</Button>
            </Form>
            <div className='w-100 text-center mt-3'>
                <Link className='mx-2' to={'/login'}>Ingresar</Link> <Link className='mx-2' to={'/signup'}>Registrate</Link>
            </div>
            </Card.Body>
        </Card>
    </>
)
}

