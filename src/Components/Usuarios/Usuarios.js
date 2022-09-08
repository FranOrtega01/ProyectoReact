import React, {useState} from "react";

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([{nombre:'Nirvana'}, {nombre:'Bianca'}])

    const nicolas = {nombre:'Nicolas'};

    const agregarNicolas = () => {
        setUsuarios([...usuarios, nicolas])
    }
    return(
        <> 
            <h2>Usuarios</h2>
            <ul>
                {usuarios.map(usuario => <li>{usuario.nombre}</li> )}
            </ul>
            <button onClick={agregarNicolas}>agregar Nicolas</button>
        </>
    )
}

export default Usuarios