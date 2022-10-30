import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from './Nav/NavItem';
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CartWidget } from '../CartWidget/CartWidget'
import { useAuth } from '../../Context/AuthContext';
import './Header.scss';
import logo from '../../assets/descarga.png';


export function NavbarBS({brand, firstToUpperCase}){
    const { currentUser } = useAuth()

    const categoriasList = ['snowboard', 'ski', 'ropa', 'bolsos']
    const categorias = []
    categoriasList.map(cat => categorias.push({name:`${firstToUpperCase(cat)}`, to:`/products/category/${cat}`}))

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link style={logoStyle} to='/'>
                    <img src={logo} alt={brand} />
                    <h1>{brand}</h1>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <NavItem categorias={categorias}/>
            </Nav>
            <Nav className='navIcons'>
                <Link to={'/cart'} className='cartWidget'>
                    <CartWidget />
                </Link>
                <Link className="userWidget" to={currentUser ? '/dashboard' : '/login'}>
                    <AccountCircleIcon fontSize="large" />
                </Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
}
