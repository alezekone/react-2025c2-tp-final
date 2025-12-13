// Esto habría que refactorizarlo. Está haciendo demásiadas coasas.
// Esta consumiendo la API, renderizando y utilizando context API.
// Igual, creo que *solo* podría sacarse el consumo de la API.

import { useState, useEffect} from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'; // Esto lo usaré para ir al detalle del producto.

import { CarritoContext } from '../context/CarritoContext.jsx';

// El parámetro "agregarProducto" ya no se usa, porque
// ahora usamos el contexto.
// const ProductosConFakeStoreAPI = ({agregarProducto}) => {
const ProductosConFakeStoreAPI = () => {

    const {agregarAlCarrito } = useContext(CarritoContext);

    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProducto(datos);
                setCargando(false);
            })
            .catch(error => {
                console.log('Error al cargar los productos', error);
                setError("Error al cargar los productos", error);
                setCargando(false);
            })
    },[]);

    if(cargando) return <p>Cargando productos...</p>;
    if(error) return <p>{error}</p>;

    return (
        <>
            <h2>Productos desde https://fakestoreapi.com</h2>
            <ul>
                {producto.map(producto => (
                    <li key={producto.id}>
                        {producto.title}: {producto.price} pesos
                        <img src={producto.image}
                             alt={producto.title}
                             height={80}
                             width={80} 
                        />
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                        <Link to={`/producto-completo/${producto.id}`}>Ver detalle</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductosConFakeStoreAPI;