import './App.scss';
import Header from './Components/Header/Header'
import {Button} from './Components/Button/Boton'
import {ItemListContainer} from './Components/ItemListContainer'

const App = () => {
  const nombre = 'Alejandro'
  const apellido = 'Fernandez'
  return(
    <>
      <Header nombre={nombre} apellido={apellido} id='1'></Header>
      <ItemListContainer nombre={nombre}/>
      {/* <Button/> */}
      
    </>
    )
  }

export default App