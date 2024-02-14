import React from 'react'

export const Navbar = () => {
  return (
    // Navbvar con boton de logout
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Banquito</span>
      </div>
      <div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Logout
        </button>
      </div>
    </nav>
  )
}
