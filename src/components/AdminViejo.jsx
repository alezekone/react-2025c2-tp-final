import FormularioProducto from "./FormularioProducto";

const Admin = () => {

    const API = 'https://6927072e26e7e41498fca0cb.mockapi.io/api/v1/productos';

    const agregarProductoEnServidorBackEnd = async (producto) => {
        try {
            const respuesta = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });

            if (!respuesta.ok) {
                throw new Error('Error al agregar el producto');
            }

            const dato = await respuesta.json();
            console.log('Producto agregado:', dato);
            alert(`Producto "${dato.nombre}" agregado exitosamente`);
        } catch (error) {
            console.error('Error en agregarProducto:', error);
        }
    }


    return (
        <>
            <h1>Admin Page</h1>
            <FormularioProducto onAgregar={agregarProductoEnServidorBackEnd} />
        </>
    );
}

export default Admin;

