import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

// Si bien este ejemplo hace todo lo que tiene que 
// hacer respecto a producto/:id, no estoy manejando
// el estado de la carga, así como tampoco un tratamiento
// muy exhaustivo de errores, como sí se hizo en el 
// componente "ProductosConMockAPI".

const DetalleProductoCompleto = () => {

    const {id} = useParams(); // Observar que no gestiona los cambios
                              // en id con useState(). Supongo que es
                              // porque viene afuera del componente.
                              // Pero es loco que luego lo ponga en el
                              // array de dependencias de useEffect().
    const [producto, setProducto] = useState(null);


    // Si quiero simular un error en la carga de datos, hago el fetch a la sgte URL:
    // https://6927072e26e7e41498fca0cb.mockapi.io/
    // El siguiente funciona: https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos/${id}
    // Pero ahora usaré el de fakestoreapi...vuelvo a MockAPI.
    useEffect(()=> {
        fetch(`https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos/${id}`)
            .then(respuesta => respuesta.json())
            .then(dato => setProducto(dato))
            .catch(error => {
                console.log('Error al cargar los productos', error);
            })
    },[id]); // Aunque no lo ponga, observo que estaría funcionando igual.
             // Imagino que -según la IA- el useParams() ya fuerza la recarga.
             // Para mí, es porque si cambio el id en la URL, es como si cambiara
             // la página, y por ende se recarga todo el componente. No sé.

    if(!producto) return <p>Cargando producto...</p>; // Funciona bien.

    return (
        <>
            <h2>Detalles del producto N° {id}</h2>
            <p>Nombre: {producto.nombre}, precio: {producto.precio}</p>
            {/* Comento la próxima línea, la cual correspondia a FakeStoreAPI.io*/}
            {/* <p>Nombre: {producto.title}, precio: {producto.price}</p>*/}
        </>
    );
}

export default DetalleProductoCompleto;
