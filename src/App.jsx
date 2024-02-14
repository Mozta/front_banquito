import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accounts } from './components/Accounts'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [data, setData] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      setIsAuthenticated(true)
    }
  }, [])

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/cuentas")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setData(data))
  // }, [])
  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token); // Guardar el token
    setIsAuthenticated(true); // Actualizar el estado de autenticación
    console.log('Login success');
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
    setIsAuthenticated(false); // Actualizar el estado de autenticación
  };

  return (
    <>
      <h1 className="text-3xl font-bold  text-purple-600">
        Banquito
      </h1>

      <div>
        {!isAuthenticated ?
          <Login onLoginSuccess={handleLoginSuccess} /> :
          <Dashboard onLogout={handleLogout} />}
      </div>

      {/* <div>
        <Accounts />
      </div> */}
    </>
  )
}

export default App
