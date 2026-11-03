import React from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { logout } from './redux/userSlice';


const menuItems = [
  { name: 'Home', href: '' },
  { name: 'Why Give Blood', href: '/whygiveblood' },
  { name: 'The Donation Process', href: '/thedonationprocess' },
  { name: 'Donate Now', href: '/donate' },
  { name: 'Blood Request', href: '/bloodrequest' },
  { name: 'Contact Us', href: '/contact' },
];

export default function ExampleNavbarThree() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  
  const handlelogout= async(e)=>{
       e.preventDefault();
       try {
          const res= await axios.get("http://localhost:8000/api/user/logout");
           console.log(res)
           if(res){
            dispatch(logout())
           }
       } catch (error) {
        console.log(error)
       }
  }
  console.log(user.user)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='relative py-3 shadow-md shadow-black flex items-center justify-between px-10'>
        <div className='flex items-center'>
          <div className='text-xl cursor-pointer text-red-600 font-bold mx-4'>Give blood</div>
        </div>
        <div>
          <div className="hidden text-white space-x-2 lg:block">
            {!user.user && <Link
              to="/signup"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
               Sign Up
            </Link>}
            {user.user==null?<Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-semibold text-black  hover:bg-black/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

            >
               {"Login"}
            </Link>:<button

              className="rounded-md px-3 py-2 text-sm font-semibold text-black  hover:bg-black/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             onClick={handlelogout}
            >
               {"Logout"}
            </button>}
          </div>
        </div>
      </div>
      <div className="relative w-[100%] bg-white">
        <div className="mx-auto flex h-full items-center justify-between px-4">
          <div className="hidden w-[100vw] h-full grow items-start sm:flex">
            <ul className="flex items-center h-full justify-center w-full">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center text-sm font-semibold ${location.pathname === item.href ? 'bg-red-600 text-white' : ''}`}
                >
                  <li className='w-[190px] h-full text-center text-nowrap  hover:bg-red-600 hover:text-white -black py-4 cursor-pointer'>
                    {item.name}
                    <span></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="py-4 absolute bottom-1 sm:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          className="h-6 w-6 text-[#2563EB]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="hidden text-white space-x-2 lg:block">
            <Link
              to="/signup"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
               {!user ?"":"Sign Up"}
            </Link>
            {user==null?<Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-semibold text-black  hover:bg-black/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            
            >
               {"Login"}
            </Link>:<button
             
              className="rounded-md px-3 py-2 text-sm font-semibold text-black  hover:bg-black/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             onClick={handlelogout}
            >
               {"Logout"}
            </button>}
          </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
