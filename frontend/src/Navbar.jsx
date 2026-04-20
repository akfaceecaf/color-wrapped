export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">COLORIFY</span>
      <div className="navbar-actions navbar-actions--right">
        <a href="#" className="navbar-link">
          About
        </a>
        <a href="#" className="navbar-link">
          Contact
        </a>
      </div>
    </nav>
  );
}
