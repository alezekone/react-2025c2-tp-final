import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

// Creo y exporto dos cosas:
// 1) El proveedor del contexto (AuthProvider).
// 2) Un hook para usar el contexto (useAuthContext).

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    const login = (nombreUsuario) => {
        const token = `fake-token-${nombreUsuario}`;
        localStorage.setItem('authToken', token);
        setUsuario(nombreUsuario);
    }

    const logout = () => {
        localStorage.removeItem('authToken');
        setUsuario(null);
    }


    return (
        <AuthContext.Provider value={{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);

// Observar en la linea de aquí arriba, que este el (custom) hook para usar el contexto
//  de autenticación. Lo creo y exporto.
// Observemos una gran diferencia entre AuthContext y CarritoContext: 
// (1) Aquí -en AuthContext- estamos usando *useContext* 
// -- versus --
// (2) En el caso de CarritoContext, exportamos el contexto directamente y lo usamos
// con useContext en los componentes que lo necesitaban.
//
// Es decir, aquí en AuthContext hicimos:
// const AuthContext = createContext();  // Línea 5.
// export const useAuthContext = () => useContext(AuthContext);  // Línea 33.
// 
// Mientras que, en CarritoContext solo hicimos:
// export const CarritoContext = createContext();   // Línea 4 (observar que hicimos el export del Context)
// y aquí no hicimos nada más, pero...
// ...en Carrito.jsx hicimos:
// const {carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);   // Línea 6.
// y en ProductosConFakeStoreAPI.jsx hicimos:
// const {agregarAlCarrito } = useContext(CarritoContext);  // Línea 16.
//
// ENTONCES, con la creación del custom hook useAuthContext, podemos simplificar el consumo del
// contexto de autenticación en nuestros componentes. Gracias a esto, en donde necesite utilizar
// AuthContext simplemente haré, por ejemplo, lo siguiente:
// const { usario, logout } = useAuthContext();
// 
// BUEH, tampoco es la gran cosa realmente.


