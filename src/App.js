import './App.css';
import Header from './Components/Header/Header'
import {Button} from './Components/Button/Boton'

const App = () => {
  const nombre = 'Alejandro'
  const apellido = 'Fernandez'
  return(
    <>
      <Header nombre={nombre} apellido={apellido} id='1'>
      </Header>
      <Button/>

    </>
    )
  }

export default App