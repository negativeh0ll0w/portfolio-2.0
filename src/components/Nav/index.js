import { Link, useMatch, useResolvedPath  } from "react-router-dom";

export default function Navbar() {
  
    return <nav className="nav">
        <ul>
            
               <CustomLink to="/projectlist">Portfolio</CustomLink>
               <CustomLink to="/about">About Me</CustomLink>
               <CustomLink to="/resume">Resume</CustomLink>
               <CustomLink to="/contact">Contact</CustomLink>
          

        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}