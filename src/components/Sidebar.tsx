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
      name: "Hover Tracking",
      link: "/hover-tracking"
    },
    {
      name: "reviews scrollable",
      link: "/review-scrollable"
    },
    {
      name: "3D slide Show",
      link: "/3d-slide-show"
    },
    {
      name: "slide show with preview",
      link: "/preview-slide-show"
    },
    {
      name: "Protrait to LandScape",
      link: "/p-to-l"
    },
    {
      name: "Tail Animation",
      link: "/tail-animation"
    },

  ]
  return (
    <div className={`h-screen bg-gray-900 p-3 flex flex-col transition-all duration-300 ${open ? "w-65" : "w-30"}`}>
      <h1 className='p-4 font-bold text-2xl'>
        UI Labs
      </h1>
      <ul className="flex flex-col list-none gap-2">
        {
          menuItems.map((menuItem, index) => {
            return <li className='text-white no-underline  rounded transition-all duration-300 py-2 pl-2 border border-gray-900 hover:border-white w-full cursor-pointer' onClick={() => navigate(menuItem.link)}>
              {menuItem.name}
            </li>
          })
        }

      </ul>
    </div>
  )
}

