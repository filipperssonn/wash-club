import { NavLink } from "react-router-dom";
import logo from "../assets/logo-vit.png";
import { easeIn, motion } from "framer-motion";

export const fadeInNav = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export default function NavbarSection() {
  return (
    <>
      <motion.nav
        variants={fadeInNav}
        initial="hidden"
        animate="show"
        transition={{ delay: 1, ease: easeIn }}
        className="top-0 fixed flex w-screen justify-center items-center mt-3"
      >
        <div className="border-2 border-alttext rounded-3xl backdrop-blur">
          <div className="grid grid-cols-3 items-center text-white text-xl font-semibold px-8">
            <NavLink
              className="{({ isActive})} flex justify-center"
              to="/program"
            >
              <h1 className="hover:border-b-2 ease-in border-alttext ">
                Priser
              </h1>
            </NavLink>
            <NavLink to="/">
              <img
                className="md:size-28 size-18 flex justify-center"
                src={logo}
                alt="Logo"
              />
            </NavLink>
            <NavLink
              className="{({ isActive})} justify-center flex"
              to="/kontakt"
            >
              <h1 className="hover:border-b-2 ease-in border-alttext ">
                Kontakt
              </h1>
            </NavLink>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
