// El Header debe estar formado por tres partes::
// 1) El logo de la empresa.
// 2) El menú de navegación (es decir, el Nav) que está en el centro.
// 3) El botón de login/logout y el carrito (sobre la derecha).
// Tengo que llevar el código a la forma descripta arriba.

import { Link, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';
import Login from '../pages/Login';

const Header = () => {

  const { usuario, logout } = useAuthContext();
  const estaLogueado = !!usuario; // Convierte a booleano (de otro modo, sería un string).


  return (
    <header style={{ backgroundColor: "#4CAF50", padding: "10px",
                     textAlign: "center", color: "white" }}>
      <h1>Student Management System</h1>
      <div>
        {
          estaLogueado ?
          <button onClick={logout}>Cerrar sesión</button>
          :
          <Link to="/login">
            <button>Log in</button>
          </Link>
        }
      </div>
    </header>
  );
}

export default Header;
