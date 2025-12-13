import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';

const Nav = () => {

  const { usuario } = useAuthContext();
  const esAdmin = usuario === 'admin'; 

  return (
    <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>
        {/*En react-router-dom, usamos el COMPONENTE <Link> en lugar del ELEMENTO HTML <a>*/}
        {/*
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>About</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        */}
        <li><Link to={'/'}>Inicio</Link></li>
        <li><Link to={'/contacto'}>Contacto</Link></li>
        {esAdmin && <li><Link to={'/admin'}>Admin</Link></li>}
      </ul>
    </nav>
  );
}

export default Nav;
