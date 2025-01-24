import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function NavbarSection() {
  return (
    <>
      <nav className="top-0 mx-[50%] fixed">
        <div className="w-xl border-2 border-alttext backdrop-blur rounded-3xl">
          <div className="flex gap-8 justify-center items-center">
            <NavLink className="" to="/program">
              Tvättprogram
            </NavLink>
            <NavLink to="/">
              <img className="size-28" src={logo} alt="Logo" />
            </NavLink>
            <NavLink className="{({ isActive})}" to="/kontakt">
              Kontakt
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarSection;
