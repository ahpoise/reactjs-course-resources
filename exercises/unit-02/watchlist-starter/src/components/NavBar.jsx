import { NavLink } from "react-router";

const linkClass = ({ isActive }) =>
  `px-3 py-2 text-sm ${
    isActive ? "font-semibold text-blue-600" : "text-gray-600 hover:text-gray-900"
  }`;

export function NavBar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-2">
        <NavLink to="/" className={linkClass} end>
          Watchlist
        </NavLink>
        <NavLink to="/new" className={linkClass}>
          Adicionar
        </NavLink>
      </div>
    </nav>
  );
}
