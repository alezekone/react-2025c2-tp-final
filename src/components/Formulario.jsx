// Ejemplo de Formulario CONTROLADO, porque
// lo estamos trabajando con useState.

import {useState} from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    
    // "evento.preventDefault()" evita que la página se recargue
    // cuando se envía el formulario (que es la forma tradicional).
    const handleEnvio = (evento) => {
        evento.preventDefault();
        alert(`Enviaste el form: ${nombre}`)
    }
    // El evento onSubmit se disparará cuando presione el botón,
    // pues lo declaré de tipo "submit".

    // El evento onChange se dispara con cada cambio dentro de
    // la casilla (dentro del input de tipo text). Observar que
    // al evento onChange se le podría asignar el hander de la
    // misma forma que se lo hizo para onSubmit, es decir, con
    // una función declarada arriba del return.

    return (
        <form onSubmit={handleEnvio}>
            <input value={nombre}
                   type="text"
                   onChange={evento => setNombre(evento.target.value)} 
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;
