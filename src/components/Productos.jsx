import { useState } from 'react'

const Carrito = () => {
    const listaProductos = [
        {id: 1, nombre: "papas", precio: 1500},
        {id: 2, nombre: "tomates", precio: 1800},
        {id: 3, nombre: "cilantro", precio: 2000}
    ];

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }

    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {listaProductos.map(producto => 
                    <li key={producto.id}>
                        {producto.nombre}:
                        {producto.precio}
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                    </li>
                )}
            </ul>
      </div>
    )
}

export default Carrito;
