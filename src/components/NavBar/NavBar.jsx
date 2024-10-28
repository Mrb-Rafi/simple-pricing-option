import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line, RiCloseLargeFill } from "react-icons/ri";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:username", name: "Profile" },
      ];

    return (
        <nav>

            <div onClick={() => setOpen(!open)} className="md:hidden">
                {
                    open === true ? <RiCloseLargeFill  className="text-xl"></RiCloseLargeFill> 
                    : <RiMenu2Line className="text-xl"></RiMenu2Line>
                }
                
            </div>

            <ul className={`md:flex absolute md:static bg-yellow-300 ${open? "": "hidden"}`}>
            {
                routes.map(route => <Link key={route.id} route = {route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;