import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';

const Carrito = ({ productosEnCarrito, productosEliminados}) => {

    const {carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {carrito.map((producto, index) => 
                <div key={index}>
            <p>{producto.nombre}</p>
            <p>$ {producto.precio}</p>
            <img className="mx-auto"
                src={producto.imagen}
                alt={producto.nombre}
                height={100}
                width={100} 
            />
                    <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
                </div>
            )}
            <button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        </div>
    )
}

export default Carrito;
