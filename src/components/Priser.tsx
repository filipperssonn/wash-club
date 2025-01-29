import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function Priser() {
  return (
    <>
      <div className="bg-[#b1e1e4] items-center grid grid-cols-1 lg:grid-cols-3  justify-items-center lg:min-h-[40rem] min-h-[120rem]">
        <div className="bg-gray-100 font-light flex justify-center items-start text-center rounded-lg hover:shadow-2xl text-footer lg:w-[80%] h-[90%]">
          <div className="flex-col space-y-4 my-2">
            <div className="text-5xl font-bold m-auto">Bra</div>
            <div className="text-5xl font-bold text-alttext">129 kr</div>
            <div className="text-xl text-footer font-semibold">
              Utan borstar
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Högtrycksspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Torkning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Avfettning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faX} size="lg" />
              <p className="ml-0.5">Fälgtvätt</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faX} size="lg" />
              <p className="ml-0.5">Borsttvätt med schampo</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faX} size="lg" />
              <p className="ml-0.5">Underspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faX} size="lg" />
              <p className="ml-0.5">Vaxpolering</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-alttext text-bluebutton font-bold px-8 py-4"
            >
              <NavLink to="/kontakt">Ta mig dit!</NavLink>
            </motion.button>
          </div>
        </div>
        <div className="bg-gray-100 font-light flex justify-center items-start text-center rounded-lg hover:shadow-2xl text-footer lg:w-[80%] h-[90%]">
          <div className="flex-col space-y-4 my-2">
            <div className="text-5xl font-bold m-auto">Bättre</div>
            <div className="text-5xl font-bold text-alttext">179 kr</div>
            <div className="text-xl text-footer font-semibold">Med borstar</div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Högtrycksspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Torkning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Avfettning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Fälgtvätt</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Borsttvätt med schampo</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faX} size="lg" />
              <p className="ml-0.5">Underspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faX} size="lg" />
              <p className="ml-0.5">Vaxpolering</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-alttext text-bluebutton font-bold px-8 py-4"
            >
              <NavLink to="/kontakt">Ta mig dit!</NavLink>
            </motion.button>
          </div>
        </div>
        <div className="bg-gray-100 font-light flex justify-center items-start text-center rounded-lg hover:shadow-2xl text-footer lg:w-[80%] h-[90%]">
          <div className="flex-col space-y-4 my-2">
            <div className="text-5xl font-bold m-auto">Bäst</div>
            <div className="text-5xl font-bold text-alttext">229 kr</div>
            <div className="text-xl text-footer font-semibold">Med borstar</div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Högtrycksspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Torkning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Avfettning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Fälgtvätt</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Borsttvätt med schampo</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Underspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-3 justify-start mx-10">
              <FontAwesomeIcon icon={faCheck} size="lg" />
              <p>Vaxpolering</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-alttext text-bluebutton font-bold px-8 py-4"
            >
              <NavLink to="/kontakt">Ta mig dit!</NavLink>
            </motion.button>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="bg-[#4f8fb4] justify-center rounded-lg">
          <h1>Företag?</h1>
          <p>Hör gärna av dig till oss för en personlig lösning</p>
        </div> */}
      </div>
    </>
  );
}
