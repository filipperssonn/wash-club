import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import biltvätt from "../assets/tvatta-bilen.png";

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
      <div className="w-screen h-screen bg-[url('./assets/herosection.jpg')] bg-cover bg-center overflow-hidden ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-[5%]">
          <div className="flex justify-center lg:justify-end pt-20 h-max w-full">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="pt-16 mx-5 lg:mx-16 md:w-auto"
            >
              <motion.h1
                variants={fadeIn}
                className="text-white text-4xl sm:text-7xl font-bold flex py-5 "
              >
                Enkel och effektiv biltvätt
              </motion.h1>
              <motion.div
                variants={fadeIn}
                className="bg-alttext h-1.5"
              ></motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-alttext text-xl sm:text-3xl font-bold flex"
              >
                ÖPPET ALLA DAGAR 7 - 22
              </motion.h1>
              <motion.div
                variants={fadeIn}
                className="lg:flex my-6 lg:space-x-2 items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-xl bg-alttext text-secondary font-bold outline-1 outline-gray-300 px-6 py-3"
                >
                  <NavLink to="/program">Tvättprogram</NavLink>
                </motion.button>
                <div className="flex text-3xl font-bold my-6">
                  <h1 className="text-gray-200">FRÅN</h1>
                  <h1 className="text-alttext bg-footer rounded ml-2 pl-1 pr-2 py-0.5">
                    129 KR
                  </h1>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex justify-center items-center lg:pt-20 md:pr-40">
            <div className="grid grid-rows-2 rounded-2xl w-90">
              <div className="flex justify-center">
                <img src={biltvätt} alt="biltvätt" className="" />
              </div>
              <div className="h-14 animated-text font-semibold text-3xl bg-footer rounded-2xl px-3 py-2 mt-2">
                Jag vill tvätta i<span className=""></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
