// Esta es una versión actualizada de ProductosConMockAPI.jsx,
// diferente a la versión de la clase 8.

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
const ProductosConMockAPI = () => {

    const {agregarAlCarrito } = useContext(CarritoContext);

    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch('https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos')
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
            <h1>Productos {/*desde https://mockapi.io*/}</h1>
            <ul>
                {producto.map(producto => (
                    <li key={producto.id}>
                        <div className="Contenedor flex p-6 m-6 shadow-md rounded-xl outline outline-white/20">
                            <div className="Seccion1 w-48 flex-none">
                            <img src={producto.imagen}
                                 alt={producto.nombre}
                                 height={80}
                                 width={80} 
                            />
                            </div>
                            <div className="Seccion2 flex-1">
                            <p>{producto.nombre} - $ {producto.precio}</p>
                            <p>Descripción: {producto.descripcion}</p>
                            </div>
                            <div className="Seccion3 w-32 flex-none">
                            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                            <Link to={`/producto-completo/${producto.id}`}>Ver detalle</Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductosConMockAPI;