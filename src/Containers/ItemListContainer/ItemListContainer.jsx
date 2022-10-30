import React, {useEffect, useState} from "react";
import { ItemList } from './ItemList';
import CircularIndeterminate from '../../Components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { DB } from '../../firebase/firebase';
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';


export const ItemListContainer = ({greetings}) => {  

    const { currentUser } = useAuth()


    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    let { categoriaName } = useParams();

    //Crea el mensaje que se muestra en listContainer, si existe el nombre del usuario lo muestra, y si no, muestra el mensaje por defecto
    let mensaje = currentUser?.displayName ? `Bienvenido ${currentUser.displayName}` : greetings

    useEffect(() => {
        //Setear la carga en true mientras solicita a la db
        setLoad(true)
        //Solicitar la coleccion 'products'
        const productsCollection = collection(DB, 'products');
        //Si el params no es undefined,filtrar por categoria
        const q = categoriaName ? query(productsCollection, where('category', '==', categoriaName)) : query(productsCollection, orderBy("category"))
        getDocs(q)
        .then((data) => {
            //Metodo .data para obtener la data especifica
            const lista = data.docs.map(prod => { 
                return {
                    ...prod.data(),
                    id:prod.id
                }
            })
            setProducts(lista)
        })
        .catch((error) => console.error(error))
        .finally(()=> setLoad(false))
    }, [categoriaName])

    return( 
    <>
        {/* Mensaje solo en el home */}
        {load ? <CircularIndeterminate /> : (
            <>
                {!categoriaName && <h2 style={{margin: '0 0 80px 0'}}>{mensaje}</h2>}
                <ItemList products={products} />
            </>
        )}
    </>
    )
}
