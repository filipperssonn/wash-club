import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContentSection() {
  return (
    <>
      <div className="bg-[#b1e1e4] items-center grid grid-cols-1 xl:grid-cols-3 px-10">
        <div className="bg-[#4f8fb4] flex justify-center text-center rounded-lg hover:shadow-2xl mt-20 mb-10 text-white max-w-md">
          <div className="flex-col space-y-4 mt-10 mb-10">
            <div className="text-4xl font-bold">Bäst</div>
            <div className="text-4xl font-bold text-alttext">229 kr</div>
            <div className="text-xl">Med borstar.</div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Högtrycksspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Torkning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Avfettning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Fälgtvätt</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Borsttvätt med schampo</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Underspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Vaxpolering</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-alttext text-bluebutton font-bold mx-3 mt-5 px-6 py-3"
            >
              <NavLink to="/kontakt">Ta mig dit!</NavLink>
            </motion.button>
          </div>
        </div>
        <div className="bg-[#4f8fb4] flex justify-center items-center text-center rounded-lg hover:shadow-2xl mt-20 mb-10 text-white max-w-md">
          <div className="flex-col space-y-4 mt-10 mb-10">
            <div className="text-4xl font-bold">Bäst</div>
            <div className="text-4xl font-bold text-alttext">229 kr</div>
            <div className="text-xl">Med borstar.</div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Högtrycksspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Torkning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Avfettning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Fälgtvätt</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Borsttvätt med schampo</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Underspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Vaxpolering</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-alttext text-bluebutton font-bold mx-3 mt-5 px-6 py-3"
            >
              <NavLink to="/kontakt">Ta mig dit!</NavLink>
            </motion.button>
          </div>
        </div>
        <div className="bg-[#4f8fb4] flex justify-center items-center text-center rounded-lg hover:shadow-2xl mt-20 mb-10 text-white max-w-md">
          <div className="flex-col space-y-4 mt-10 mb-10">
            <div className="text-4xl font-bold">Bäst</div>
            <div className="text-4xl font-bold text-alttext">229 kr</div>
            <div className="text-xl">Med borstar.</div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Högtrycksspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Torkning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Avfettning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Fälgtvätt</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Borsttvätt med schampo</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Underspolning</p>
            </div>
            <div className="text-xl text-start flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <p>Vaxpolering</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-alttext text-bluebutton font-bold mx-3 mt-5 px-6 py-3"
            >
              <NavLink to="/kontakt">Ta mig dit!</NavLink>
            </motion.button>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#4f8fb4] justify-center rounded-lg">
          <h1>Företag?</h1>
          <p>Hör gärna av dig till oss för en personlig lösning</p>
        </div>
      </div>
    </>
  );
}
