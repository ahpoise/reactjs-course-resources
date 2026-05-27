import { NavLink } from "react-router";

export function NavBar() {
  return (
    <nav className="border-b border-gray-200 flex gap-2 px-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "px-3 py-2 text-blue-600 font-semibold border-b-2 border-blue-600"
            : "px-3 py-2 text-gray-600 hover:text-gray-900"
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive
            ? "px-3 py-2 text-blue-600 font-semibold border-b-2 border-blue-600"
            : "px-3 py-2 text-gray-600 hover:text-gray-900"
        }
      >
        Utilizadores
      </NavLink>
    </nav>
  );
}
