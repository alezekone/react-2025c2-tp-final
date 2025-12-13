import { createContext, useState } from 'react';

// Creamos el contexto.
export const CarritoContext = createContext();

// Creamos un proveedor para el contexto.
// El pasaje de "children" permite que cualquier componente
// envuelto por este proveedor pueda acceder al contexto.
export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value = {{ carrito, agregarAlCarrito,
                                            eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}

