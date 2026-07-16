import { Link } from "react-router-dom";
import ThemeToggle from "./themeToggle";
import '../styles/components/navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <ThemeToggle className="navbar-buttons" />
      <Link className="navbar-buttons" to="/">Home</Link>
      <Link className="navbar-buttons" to="/about">About</Link>
      <Link className="navbar-buttons" to="/project">Projects</Link>
    </div>
  );
}
