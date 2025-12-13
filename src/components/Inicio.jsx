// import { useContext } from 'react';
// import { CarritoContext } from '../context/CarritoContext.jsx';

// Esto (<Inicio />) lo pondrá luego en /pages, sacándolo de /components.

import ProductosConFakeStoreAPI from './ProductosConFakeStoreAPI.jsx'; 
import ProductosConMockAPI from './ProductosConMockAPI.jsx'
import Carrito from './Carrito.jsx';     // Esto lo pondré luego en /pages, sacándolo de /components.

const Inicio = () => {

    // const { agregarAlCarrito } = useContext(CarritoContext);

    return (
        <>
            <h1>Inicio</h1>
            {/* <ProductosConFakeStoreAPI agregarProducto={agregarAlCarrito}/> */}
            {/* <ProductosConFakeStoreAPI />*/}
            <ProductosConMockAPI />
            <hr />
            <Carrito />
        </>
    )
}

export default Inicio