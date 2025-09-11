import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg fixed w-full top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-white text-xl font-bold tracking-tight hover:text-blue-200 transition-colors"
            >
              Correlativas Inteligentes
            </Link>
          </div>

          {/* Links de Navegación */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/seguimiento" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/seguimiento' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                Seguimiento Materias
              </Link>
              <Link 
                to="/finales" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/finales' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                Seguimiento Finales
              </Link>
              <Link 
                to="/materias" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/materias' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                Materias
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/about' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                Acerca de
              </Link>
            </div>
          </div>

          {/* Menú móvil (opcional para después) */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              {/* Icono de hamburguesa */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};