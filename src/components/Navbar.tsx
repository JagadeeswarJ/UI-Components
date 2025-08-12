import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-dark-800 border-b border-gray-700">
      <div className="nav-brand">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors duration-300 no-underline"
        >
          Grafitti Components
        </Link>
      </div>
      <ul className="flex list-none gap-8 m-0 p-0">
        <li>
          <Link 
            to="/" 
            className="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}