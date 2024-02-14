import React, { useState } from 'react';
import { loginService } from '../services/loginService'; // Asegúrate de que la ruta sea correcta

export const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const token = await loginService.login({ username, password });
      console.log(token);
      localStorage.setItem('token', token); // Guardar el token en localStorage
      // Redirigir al usuario o realizar otra acción después del login
      onLoginSuccess(token); // Llamar a la función pasada como prop
    } catch (error) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className=" card bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h1 className="text-3xl font-bold text-red-400">
        Login
      </h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            id="username"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            id="password"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'> Iniciar sesión </button>
        {error && <p className="text-red-500 pt-4"
        >{error}</p>}
      </form>
    </div>
  );
};
