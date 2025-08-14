import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-2 bg-dark-800 border-b border-gray-700">
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
            className="text-white no-underline px-2 py-1 rounded transition-all duration-300 border border-[#0e0e0e] hover:border-white"
          >
            Comp 1
          </Link>
        </li>
        <li>
          <Link
            to="/comp2"
            className="text-white no-underline px-2 py-1 rounded transition-all duration-300 border border-[#0e0e0e] hover:border-white"

          >
            Comp 2
          </Link>
        </li>
        <li>
          <Link
            to="/comp3"
            className="text-white no-underline px-2 py-1 rounded transition-all duration-300 border border-[#0e0e0e] hover:border-white"

          >
            Comp 3
          </Link>
        </li>
        <li>
          <Link
            to="/comp4"
            className="text-white no-underline px-2 py-1 rounded transition-all duration-300 border border-[#0e0e0e] hover:border-white"
          >
            Comp 4
          </Link>
        </li>
        <li>
          <Link
            to="/progress"
            className="text-white no-underline px-2 py-1 rounded transition-all duration-300 border border-[#0e0e0e] hover:border-white"
          >
            Progress
          </Link>
        </li>
      </ul>
    </nav>
  )
}