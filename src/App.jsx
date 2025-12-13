import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import Formulario from './components/Formulario.jsx'
import Carrito from './components/Carrito.jsx'
import ProductosConFakeStoreAPI from './components/ProductosConFakeStoreAPI.jsx'
import Inicio from './components/Inicio.jsx'
import Contacto from './components/Contacto.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import DetalleProductoSencillo from './components/DetalleProductoSencillo.jsx'
import DetalleProductoCompleto from './components/DetalleProductoCompleto.jsx'
import Login from './pages/Login.jsx'
import Admin from './components/Admin.jsx'

function App() {
  // const [count, setCount] = useState(0)
  
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const iniciarSesion = () => setIsAuthenticated(true);
  // const cerrarSesion = () => setIsAuthenticated(false);



  return (
    <>
      <Header />
      <Nav />  {/*Hoy en día, el Nav se usa dentro del Header. Ayuda cuando vemos el sitio desde un teléfono.*/}

{/*
      {
        isAuthenticated ? 
        (<button onClick = {cerrarSesion}>Cerrar sesión</button>) :
        (<button onClick = {iniciarSesion}>Iniciar sesión</button>)
      }
*/}

      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />

{/*        <Route path={"/admin"}                                                              */}
{/*               element={<RutaProtegida isAuthenticated={isAuthenticated}> {/* <--props */}
{/*                           <Admin /> {/* <--children                                        */}
{/*                        </RutaProtegida>                                                    */}
{/*                       }                                                                    */}
{/*               />                                                                           */}

        <Route path={"/admin"}                                                              
               element={<RutaProtegida> {/* <-- Ya no uso parámetro */}
                           <Admin /> {/* <-- Children obviamente sigue estando  */}                                     
                        </RutaProtegida>                                                    
                       }                                                                    
               />   
        
        <Route path={"/carrito"}                                                              
               element={<RutaProtegida>
                           <Admin />                                    
                        </RutaProtegida>                                                    
                       }                                                                    
               />  
               
        <Route path={"/login"} element={<Login />} />
        <Route path={"/producto-sencillo/:id"} element={<DetalleProductoSencillo />} />
        <Route path={"/producto-completo/:id"} element={<DetalleProductoCompleto />} />
      </Routes>
      {/*<ProductosConFakeStoreAPI />*/}
      <Footer />
      {/*<Main />*/}
      {/*<Formulario />*/}
      {/*<Carrito />*/}
      {/*<Gallery />*/}   

    </>
  )
}

export default App
