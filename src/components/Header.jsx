import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseService"; 

import Logo from '../assets/Logo-Atos-White.svg';
import "../css/Header.css";

const Header = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Escuchar el estado de autenticación en Firebase
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser); // Actualizar el estado con el usuario autenticado
        });
    
        // Limpiar el listener cuando el componente se desmonte
        return () => unsubscribe();
      }, []);

    const handleLogout = async () => {
        await signOut(auth);
        window.location.reload()
    };

    return (
        <nav className="navbar navbar-expand-lg shadow-sm header-background-atos w-100">
            <div className="container-fluid d-flex justify-content-between align-items-center w-100">
                {/* Logo a la izquierda */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img 
                        src={Logo}
                        alt="Logo" 
                        className="me-2"
                        width="110" 
                        height="auto"
                    />
                </a>

                {/* Botón de Login/Logout alineado a la derecha */}
                <div className="d-flex">
                    {user ? (
                        <button className="btn btn-primary font-atos" onClick={handleLogout}>
                            Log out
                        </button>
                    ) : (
                        <button className="btn btn-primary font-atos" onClick={() => navigate("/login")}>
                            Log in
                        </button>
                    )}
                </div>
            </div>
</nav>
    )
}

export default Header;