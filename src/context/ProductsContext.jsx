import {useState, useEffect, createContext, useContext} from 'react';

// Creamos y exportamos:
// (1) El contexto de productos.
// (2) El provider del contexto de productos.
// (3) El custom hook para usar el contexto de productos.

// (1) Creación del contexto de productos.
export const ProductsContext = createContext();

// (2) Provider del contexto de productos.
export const ProductsProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError]  = useState(null);

    const API = 'https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos';

    useEffect(() => {
        cargarProductos();
    }, []);
    
    // Función para traer productos desde el backend.
    const cargarProductos = async () => {
        try {
            setCargando(true);
            setError(null);
            const response = await fetch(API);
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error("Error al cargar productos: ", error);
            setError(error.message || "Error al cargar los productos.");
        } finally {
            setCargando(false);
        }
    };

    // Funcion para editar un producto en el backend.
    const editarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${API}/${producto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (respuesta.ok) {
                const productoActualizado = await respuesta.json();
                setProductos(productos.map(p => p.id === productoActualizado.id ? productoActualizado : p));
                console.log('Producto actualizado:', productoActualizado);
                alert(`Producto "${productoActualizado.nombre}" actualizado exitosamente`);
                } else {
                    throw new Error('Error al actualizar producto');
                }
            } catch (error) {
                console.error('Error al actualizar producto: ', error);
                alert('Error al actualizar producto');
            }
    }

    // Función para cargar un nuevo producto en el backend.
    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (respuesta.ok) {
                const nuevoProducto = await respuesta.json();
                setProductos([...productos, nuevoProducto]);
                console.log('Producto agregado:', nuevoProducto);
                alert(`Producto "${nuevoProducto.nombre}" agregado exitosamente`);
            } else {
                throw new Error('Error al agregar producto');
            }
        } catch (error) {
            console.error('Error al agregar producto:', error);
            alert('Error al agregar producto');
        }
    }

    // Función para eliminar un nuevo producto en el backend.
    const eliminarProducto = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (!confirmar) return;
    try {
        const respuesta = await fetch(`${API}/${id}`, {
            method: 'DELETE'
        });
        if (respuesta.ok) {
            // Actualizo el estado local para reflejar la eliminación
            // sin necesidad de recargar toda la lista desde el servidor
            setProductos(productos.filter(producto => producto.id !== id));
            alert('Producto eliminado exitosamente');
            } else {
                throw new Error('Error al eliminar producto');
          }
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            alert('Error al eliminar producto');
        }
    }

    return (
        <ProductsContext.Provider value={{
            productos,
            cargando,
            error,
            cargarProductos,
            agregarProducto,
            editarProducto,
            eliminarProducto }}>
            {children}
        </ProductsContext.Provider>
    );
};

// (3) Custom hook para usar el contexto de productos.
export const useProductsContext = () => {
    return useContext(ProductsContext);
};
