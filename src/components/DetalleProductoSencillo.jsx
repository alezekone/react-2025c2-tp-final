import { useParams } from 'react-router-dom';

const DetalleProductoSencillo = () => {
    const {id} = useParams();
    return (

        <div>
            <h2>Detalle del Producto N°: {id}</h2>
            <p>Aquí se mostrarán los detalles del producto seleccionado.</p>
        </div>
    )

}

export default DetalleProductoSencillo;