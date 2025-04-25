import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseService";
import { useNavigate } from "react-router-dom";

import "../css/Form.css"

const Register = () => {
    const navigate = useNavigate()
    const [userForm, setUserForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [user, setUser] = useState(null);
    const [error, setError] = useState(""); // Estado para errores
    const [success, setSuccess] = useState(""); // Estado para mostrar éxito
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
        console.log("Usuario registrado:", user);
        }
    }, [user]);

    const handleInputChange = (e) => {
        setUserForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true); // Activar loading

        // Validar que las contraseñas coincidan
        if (userForm.password !== userForm.confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false); // Desactivar loading cuando hay error
        return;
        }

        if (userForm.password.length < 6) {
        setError("Passwords must be longer than 6 characters.");
        setLoading(false); // Desactivar loading cuando hay error
        return;
        }

        try {
        // Crear usuario en Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            userForm.email,
            userForm.password
        );

        setUser(userCredential.user);
        setSuccess("Success creating your user!. Redirecting to login page...");
        setUserForm({ email: "", password: "", confirmPassword: "" });
        setTimeout(() => {
            navigate("/login");
          }, 3000);
        } catch (error) {
        console.error("Error on create of account:", error);
        if (error.code === "auth/email-already-in-use") {
            setError("Email already in use. Use another or log in.");
        } else {
            setError("Error trying to register. Please verify the data.");
        }
        } finally {
        setLoading(false); // Desactivar loading después de completar la operación
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center atos-container">
          <div className="card p-4 shadow atos-width">
            <h2 className="text-center mb-3">Create Your Account</h2>
      
            {/* Mostrar error si hay */}
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
      
            {/* Formulario */}
            <form onSubmit={handleSubmitForm}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email..."
                  value={userForm.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                />
              </div>
      
              {/* Contraseña */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={userForm.password}
                  onChange={handleInputChange}
                  required
                  autoComplete="current-password"
                />
              </div>
      
              {/* Repetir Contraseña */}
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password..."
                  value={userForm.confirmPassword}
                  onChange={handleInputChange}
                  required
                  autoComplete="new-password"
                />
              </div>
      
              {/* Botón de Registro */}
              <button
                type="submit"
                className="btn btn-primary w-100 mb-2"
                disabled={loading}
              >
                {loading ? "Registrando..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      );      
      
};

export default Register;
