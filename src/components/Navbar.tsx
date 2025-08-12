import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-dark-800 border-b border-gray-700">
      <div className="nav-brand">
        <Link
          to="/comp1"
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
            Comp 1
          </Link>
        </li>
        <li>
          <Link
            to="/comp2"
            className="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-700"
          >
            Comp 2
          </Link>
        </li>
        <li>
          <Link
            to="/comp3"
            className="text-white no-underline px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-700"
          >
            Comp 3
          </Link>
        </li>
      </ul>
    </nav>
  )
}