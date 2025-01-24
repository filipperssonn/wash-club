import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const fadeIn = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0, staggerChildren: 0.2 },
  },
};

export default function HeroSection() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[url('./assets/herosection.jpg')] bg-cover bg-center">
        <div className="flex justify-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="pt-16 md:px-16 md:w-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="text-alttext text-5xl font-bold flex "
            >
              ÖPPETTIDER
              <br />
              ALLA DAGAR 7 - 22
            </motion.h1>
            <motion.h1
              variants={fadeIn}
              className="text-white text-7xl font-bold flex py-10"
            >
              Tvätta bilen snabbt,
              <br /> billigt och smidigt
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="bg-alttext h-1.5"
            ></motion.div>
            <motion.div
              variants={fadeIn}
              className="inline-flex py-6 space-x-2 items-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded bg-knapp text-bluebutton font-bold outline-1 outline-gray-300 px-6 py-3"
              >
                <NavLink to="/pricing">Tvättprogram</NavLink>
              </motion.button>
              <h1 className="text-3xl text-gray-200 font-bold">FRÅN</h1>
              <h1 className="text-3xl text-alttext font-bold">129 KR</h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
