import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { state, logout } = useContext(AuthContext);
  const { isAuthenticated, user } = state;

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Biblioteca Universitaria
        </Link>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/books" className="hover:text-blue-200">
                Catálogo
              </Link>
              {user?.role !== 'estudiante' && (
                <Link to="/admin" className="hover:text-blue-200">
                  Administración
                </Link>
              )}
              <span className="hover:text-blue-200">
                Hola, {user?.name}
              </span>
              <button
                onClick={logout}
                className="hover:text-blue-200"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-200">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="hover:text-blue-200">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
