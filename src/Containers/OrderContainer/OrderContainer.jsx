import React, { useRef, useState, useEffect } from 'react'
import './orderSection.scss'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { DB } from '../../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'
import { Order } from './Order'


export const OrderContainer = () => {
    const orderRef = useRef()
    const [order, setOrder] = useState('')
    const [error, setError] = useState('')
    const [load, setLoad] = useState(false)
    const [product, setProduct] = useState()

    const handleSubmit = () => {
        setOrder(orderRef.current.value)
    }
    useEffect(() => {
        if (order){
            setProduct()
            setLoad(true)
            const sellsCollection = collection(DB, 'sells')
            const refDoc = doc(sellsCollection, order)
            getDoc(refDoc)
            .then((data) => {
                setProduct(data.data())
            })
            .catch((error) => {
                console.error(error);
                setError('No encontramos ese producto')
            })
            .finally(() => {
                setLoad(false)
            })
        }
    }, [order]);

    return (
        <>
        <Container style={{minHeight: '60vh'}} className='mt-5 d-flex align-items-start justify-content-center' >
            <Card>
                <Card.Body>
                    <h2 className='text-center mx-2 my-5'>Buscá tu compra por ID</h2>
                    {error && <Alert className='text-center' variant='danger'>{error}</Alert>}
                    <Form className='mb-4 d-flex justify-content-center flex-wrap'>
                        <Form.Control className='w-auto' style={{marginRight: 10}} type='text' placeholder='ID de tu compra' required ref={orderRef}/>
                        <Button disabled={load} onClick={handleSubmit}>Buscar</Button>
                    </Form>
                </Card.Body>
            {product && 
                    <Container className='order px-3 my-3 d-flex flex-column align-items-center justify-content-center' >
                        <Order product={product} />
                    </Container>
            }
            </Card>
        </Container>
        </>
        
    )
}
