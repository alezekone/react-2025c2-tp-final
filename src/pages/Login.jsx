import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext.jsx';

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (evento) => {
        evento.preventDefault(); // Para que no renderice la página
                                 // nuevamente al reenviar el formulario.
        if (usuario == 'admin' && contrasena == '1234') {
            login(usuario); // <-- Ver la función en AuthContext.jsx
            navigate('/admin');
        } else {
            alert('Usuario o contraseña incorrecto.');
        }
    }
    
    return (
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <h3>Iniciar Sesion</h3>
                {/* htmlFor es de JSX y es equivalente a la palabra reservada "for" de los formularios HTML
                    y al mismo tiempo "for" es palabra resevada en JS. Considerando que JSX es HTML+JS, 
                    no es raro que no se pueda usar el "for" de HTML así no más acá. */}
                <label htmlFor="userNameInput">Usuario</label>
                <input id="userNameInput"
                       type='text'
                       value={usuario}
                       onChange = {(evento) => setUsuario(evento.target.value)}
                       />

                <label htmlFor="passwordInput">Contraseña</label>
                <input id="passwordInput"
                       type='text'
                       value={contrasena}
                       onChange = {(evento) => setContrasena(evento.target.value)}
                       />
                <button type='submit'>Iniciar sesión</button>  
            </form>
        </>
    );
}

export default Login;
