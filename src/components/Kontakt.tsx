import { motion } from "framer-motion";

export default function Kontakt() {
  return (
    <>
      <div className="grid gap-4 justify-center bg-primary-darkest overflow-x-hidden">
        <div className="flex justify-center items-center bg-primarylight rounded w-[90%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7208551494323!2d13.473114494951332!3d59.32413818445228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb3d60e03340b%3A0xfbd67e163c2cfcfb!2sWash%20Club!5e0!3m2!1ssv!2sse!4v1738143240893!5m2!1ssv!2sse"
            className="w-[90%] flex"
          ></iframe>
        </div>
        <div className="flex justify-center items-center bg-primarylight rounded w-[90%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4094.2668658909224!2d12.909905130624901!3d59.13016779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4644a7ae75505daf%3A0xe8ae3946de1b8a24!2sWash%20Club!5e0!3m2!1ssv!2sse!4v1738143315144!5m2!1ssv!2sse"
            className="w-[90%] flex"
          ></iframe>
        </div>
        <div className="flex justify-center items-center bg-primarylight rounded w-[90%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d684.6408063987577!2d12.675383457533067!3d59.05533663382565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4644a3aba00b8fe1%3A0x27f7ea6736506d2!2sWash%20Club!5e0!3m2!1ssv!2sse!4v1738143773150!5m2!1ssv!2sse"
            className="w-[90%] flex"
          ></iframe>
        </div>
        <div className="flex justify-center items-center content-center rounded-xl row-span-2 text-primary-darkest h-[80%] w-[90%] bg-primarylight">
          <div>
            <section>
              <form className=" ">
                <h1>Kontakta oss</h1>
                <div className="">
                  <label className="">Namn</label>
                  <input
                    className=""
                    type="text"
                    placeholder="Namn"
                    required
                  ></input>
                </div>
                <div className="">
                  <label>Email</label>
                  <input
                    className=""
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="">
                  <label>Ämne</label>
                  <input className="" type="text" placeholder="Ämne" required />
                </div>
                <div className="">
                  <label>Meddelande</label>
                  <input
                    className=""
                    type="text"
                    placeholder="Meddelande"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-xl bg-alttext text-secondary font-bold outline-1 outline-gray-300 px-6 py-3"
                >
                  Skicka
                </motion.button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
