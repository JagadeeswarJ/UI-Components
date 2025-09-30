import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface MenuItems {
  name: string,
  link: string
}
export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate();
  const menuItems: MenuItems[] = [
    {
      name: "comp1",
      link: "/comp1"
    },
    {
      name: "comp2",
      link: "/comp2"
    },
    {
      name: "comp3",
      link: "/comp3"
    },
    {
      name: "comp4",
      link: "/comp4"
    },
    {
      name: "work-in-progress",
      link: "/progress"
    },

  ]
  return (
    <div className={`h-screen bg-gray-900 p-3 flex flex-col transition-all duration-300 ${open ? "w-50" : "w-30"}`}>
      <ul className="flex flex-col list-none gap-2">
        {
          menuItems.map((menuItem, index) => {
            return <li className='text-white no-underline  rounded transition-all duration-300 py-2 pl-2 border border-gray-900 hover:border-white w-full cursor-pointer' onClick={() => navigate(menuItem.link)}>
              {menuItem.name}
              {/* <Link to={menuItem.link} className='text-white no-underline  rounded transition-all duration-300 border border-gray-900 hover:border-white w-full'>
              </Link> */}
            </li>
          })
        }

      </ul>
    </div>
  )
}

/*

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
*/