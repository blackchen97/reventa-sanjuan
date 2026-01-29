import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary-600 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Reventa San Juan</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-primary-200 transition-colors">Inicio</Link></li>
                <li><Link to="/productos" className="hover:text-primary-200 transition-colors">Productos</Link></li>
                <li><Link to="/login" className="hover:text-primary-200 transition-colors">Iniciar Sesión</Link></li>
                <li><Link to="/register" className="hover:text-primary-200 transition-colors">Registrarse</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Reventa San Juan. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
