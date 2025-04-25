import { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
// import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebaseService";
import { useNavigate } from "react-router-dom";
import { setPersistence, browserSessionPersistence } from "firebase/auth";

import "../css/Form.css"


const Login = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [userForm, setUserForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setUserForm((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setError(""); // Resetear errores previos
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            userForm.email,
            userForm.password
          );

          await setPersistence(auth, browserSessionPersistence);

    
          
          navigate("/")
          // setTimeout(() => {
          //   navigate(0); // Después de un pequeño retraso, recargamos la página
          // }, 50);
        } catch (error) {
          console.error("Error en el login:", error);
          setError("Correo o contraseña incorrectos"); // Mostrar mensaje de error al usuario
        }
      };

    return (
      <div className="d-flex justify-content-center align-items-center atos-container">
        <div className="card p-4 shadow atos-width">
          <h2 className="text-center mb-3">Log To Your Account</h2>

          {/* Mostrar error si existe */}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmitForm}>
            {/* Campo de Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input name="email" type="email" className="form-control" placeholder="Email..." onChange={handleInputChange} autoComplete="email" />
            </div>
    
            {/* Campo de Contraseña */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input name="password" type="password" className="form-control" placeholder="Password..." onChange={handleInputChange} autoComplete="current-password"/>
            </div>
    
            {/* Botón de Login */}
            <button type="submit" className="btn btn-primary w-100 mb-2">Log in</button>
          </form>

          <button className="btn btn-outline-danger w-100" onClick={() => navigate("/register")}>
            <i className="bi bi-google me-2"></i> Register
          </button>
        </div>
      </div>
    );
  }
  
  export default Login;