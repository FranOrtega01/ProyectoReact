import React from 'react'
import './Form.scss'

export const Form = () => {

  return (
    <form id='cartForm' onSubmit={onSubmit}>
        <input type="text" className='nombre' placeholder='Nombre' required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <input type="email"className='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
    </form>
  )
}

export default Form