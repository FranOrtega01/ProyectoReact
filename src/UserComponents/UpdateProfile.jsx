import React , {useRef, useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useAuth } from '../Context/AuthContext';
import {Link, useNavigate } from 'react-router-dom'



export const UpdateProfile = () => {
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { currentUser, emailUpdate, passwordUpdate, nameUpdate } = useAuth()
    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('¡Las contraseñas no coinciden!')
        }

        const updatePromise = [];

        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email){
            updatePromise.push(emailUpdate(emailRef.current.value))
        }
        if (nameRef.current.value !== currentUser.displayName){
            updatePromise.push(nameUpdate(nameRef.current.value))
        }
        if (passwordRef.current.value){
            updatePromise.push(passwordUpdate(passwordRef.current.value))
        }

        Promise.all(updatePromise)
        .then(() => {
            navigate('/dashboard')})
        .catch(() => { setError('¡Hubo un error al actualizar tu perfil!')})
        .finally(() => setLoading(false))
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4 mt-4'>Actualizar perfil</h2>
                {error && <Alert className='text-center' variant='danger'>{error}</Alert>}
                <Form className='SignUpForm' onSubmit={handleSubmit}>
                    <Form.Group className='mt-2 w-100' id='signEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' defaultValue={currentUser.email} required ref={emailRef}/>
                    </Form.Group>
                    <Form.Group className='mt-2 w-100' id='signName'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type='text' defaultValue={currentUser.displayName && currentUser.displayName} ref={nameRef}/>
                    </Form.Group>
                    <Form.Group className='mt-2 w-100' id='signPassword'>
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control type='password' placeholder='Dejar en blanco para mantener la contraseña' ref={passwordRef}/>
                    </Form.Group>
                    <Form.Group className='mt-2 w-100' id='signConfirmPassword'>
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type='password' placeholder='Dejar en blanco para mantener la contraseña' ref={passwordConfirmRef}/>
                    </Form.Group>
                    <Button disabled={loading} className='mt-4 w-50 SignUpBtn'  type='submit'>Actualizar</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            <Link to={'/dashboard'}>Cancelar</Link>
        </div>
        </>
    )
}
