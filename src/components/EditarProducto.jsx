import { useState, useEffect } from 'react';

const EditarProducto = ({ productoEnEdicion, onActualizar}) => {

    const [producto, setProducto] = useState( productoEnEdicion || {
        nombre: '',
        precio: '',
        imagen: '',
        descripcion: ''
    }); // Esto es también una validación.

const API = 'https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos';

useEffect(() => {
    if (productoEnEdicion) 
        setProducto(productoEnEdicion);
    }, [productoEnEdicion]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
        ...producto,
        [name]: value
    });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const respuesta = await fetch(`${API}/${producto.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

if (!respuesta.ok) {
            throw new Error('Error al actualizar el producto x');
        }

    const dato = await respuesta.json();
    onActualizar(dato);
    alert(`Producto ${dato.nombre} actualizado exitosamente`);
    } catch (error) {
        console.error('Error en actualizarProducto:', error);
        alert('Error al actualizar el producto x');   
    }
};

return (
        <>
            <form onSubmit={handleSubmit}>
                {/*<h2>Producto en edición</h2>*/}
                {/*---------------------------------------------------*/}
                <div>
                    <label>Nombre</label>
                    <br />
                    <input type='text'
                           name='nombre'
                           value={producto.nombre || ''}
                           onChange={handleChange}
                           required
                    />
                </div>
                {/*---------------------------------------------------*/}
                <div>
                    <label>Precio</label>
                    <br />
                    <input type='number'
                           name='precio'
                           value={producto.precio || ''}
                           onChange={handleChange}
                           required
                           min={0}       
                           step='any'    
                    />
                </div>
                {/*---------------------------------------------------*/}
                <div>
                    <label>URL de Imagen</label>
                    <br />
                    <input type='text'
                           name='imagen'
                           value={producto.imagen || ''}
                           onChange={handleChange}
                    />
                </div>
                {/*---------------------------------------------------*/}
                <div>
                    <label>Descripción</label>
                    <br />
                    <textarea
                        name='descripcion'
                        value={producto.descripcion || ''}
                        onChange={handleChange}
                    />
                </div>
                {/*---------------------------------------------------*/}
                <button type='submit'>Actualizar</button>
            </form>
        </>










);

}

export default EditarProducto;