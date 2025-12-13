import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';

const RutaProtegida = ({children}) => {

      const { usuario } = useAuthContext();
      const estaLogueado = !!usuario; // Convierte a booleano (de otro modo, sería un string).

    if (!estaLogueado) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default RutaProtegida;