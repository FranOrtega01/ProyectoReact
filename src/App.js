import './App.scss';
import Header from './Components/Header/Header'
// import Contador from './Components/Contador/Contador'
// import Usuarios from './Components/Usuarios/Usuarios'
import {ItemListContainer} from './Components/ItemListContainer'

const App = () => {
  const nombre = 'Ramón'
  const apellido = 'Fernandez'
  return(
    <>
      <Header nombre={nombre} apellido={apellido} id='1'></Header>
      <ItemListContainer nombre={nombre}/>
    </>
    )
  }

export default App