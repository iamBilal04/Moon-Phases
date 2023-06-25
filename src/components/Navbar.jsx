import { useState } from "react"
import { logo, menu, close } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full bg-slate-950 rounded-b-lg flex z-20 items-center fixed sm:px-16 px-6 py-5 top-0 h-20">
      <div className="w-full flex items-center max-w-7xl mx-auto gap-[2]">
        <img src={logo} alt="logo" className="w-14 h-14 object-contain"/>
        <p className="flex text-[#9D00FF] font-extrabold text-[22px]">Find my Moon</p>
      </div>

      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link) => (
          <li 
            key={link.id}
            className={`${
              active === link.title ?"text-white": "text-gray-500"
            } hover:text-[#9D00FF] text-[18px]
            font-medium cursor-pointer
            `}
            onClick={() => { setActive(link.title) }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden justify-end items-center'>
          <img 
            src={toggle ? close : menu }
            alt='menu'
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}

          />
          <div className={`${!toggle ?  'hidden' :'flex'} 
          p-6 black-gradient absolute top-20 right-0 mx-4 
          my-2 min-w-[140px] z-10 rounded-xl
          }`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-gray-500"
              } text-violet-700 font-bold
              font-medium text-[16px]
              `}
              onClick={() => { 
                setToggle(!toggle);
                setActive(link.title);
                }} 
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}


            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar