import { useState, useEffect, act } from 'react';
import { useProductsContext } from '../context/ProductsContext.jsx';
import FormularioProducto from './FormularioProducto';
import EditarProducto from './EditarProducto';

const GestionProductos = () => {
    // Preparo el contexto de productos:
    const { productos, cargarProductos, eliminarProducto } = useProductsContext();
    // Estados locales:
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [modoFormulario, setModoFormulario] = useState("agregar");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [productoAEliminar, setProductoAEliminar] = useState(null);

    // TODO: el profe sacó este useEffect e incluso el "cargarProducto" de las cosas
    // que importa con el useProductsContext(). A mi eso todavía no me parece correcto.
    // Veremos.
    // Cargar productos al montar el componente...
    // useEffect(() => {
    //     cargarProductos();} 
    // , []);
    
    // Antes definíamos cargarProductos aquí, ahora viene del contexto.
    // Lo mismo sucede con agregarProducto, actualizarProducto y eliminarProducto.

    // Abrir formulario para agregar:
    const abrirFormularioAgregar = () => {
        setModoFormulario("agregar");
        setProductoSeleccionado(null);
        setMostrarFormulario(true);
    }

    // Abrir formulario para editar:
    const abrirFormularioEditar = (producto) => {
        setModoFormulario("editar");
        setProductoSeleccionado(producto);
        setMostrarFormulario(true);
    }    

    // Cerrar el formulario:
    const cerrarFormulario = () => {
        setMostrarFormulario(false);
        setProductoSeleccionado(null);
    };

    // Confirmar el borrado del producto
    const confimarEliminar = (producto) => {
        setProductoAEliminar(producto);
    };

    const handleEliminar = () => {
        if (productoAEliminar) {
            eliminarProducto(productoAEliminar.id);
            setProductoAEliminar(null);
        }
    }

    // const seleccionarUnProducto = (producto) => {
    //     setProductoSeleccionado(producto);
    // }

    // if (cargando) {
    //     return <div>Cargando productos...</div>
    // }

    return (
        <div>
            <div>
                <div>
                    <h2>Lista de Productos</h2>
                    {/* Botón para agregar productos */}
                    <button onClick={abrirFormularioAgregar}>
                        <p>Agregar producto</p>
                    </button>
                </div>
                <div>
                    {productos.length === 0 ? (
                        <p>No hay productos</p>
                    ):(
                        <div>
                            {productos.map((producto) => (
                                <div key={producto.id}>
                                    <img src={producto.imagen} alt={producto.nombre} />
                                    <h3>{producto.nombre}</h3>
                                    <p>Precio: ${producto.precio}</p>
                                    <button onClick={() => abrirFormularioEditar}>Editar</button>
                                    <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default GestionProductos;