import React, {useState} from 'react'
import './Form.scss'
export const Form = ({nombre, setNombre, apellido, setApellido, email, setEmail}) => {

  return (
    <form>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id='nombre' required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id='apellido' required value={apellido} onChange={(e) => setApellido(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email" >Email</label>
        <input type="email" id='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
    </form>
  )
}

export default Form