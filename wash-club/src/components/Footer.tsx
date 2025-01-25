export default function Footer() {
  return (
    <>
      <div>
        <div className="bg-[#312f73]  text-gray-300">
          <div
            className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2
           lg:grid-cols-3 mx-[20%] justify-items-start w-[80%]"
          >
            <div className="lg:py-20 py-5 flex-col">
              <h2 className="text-xl font-semibold text-white">HÄR FINNS VI</h2>
              <br />
              <p className="text-lg">Skoghall</p>
              <p className="text-lg">Säffle</p>
              <p className="text-lg">Åmål</p>
            </div>
            <div className="lg:py-20 py-5 flex-col ">
              <h2 className="text-xl font-semibold text-white">OM OSS</h2>
              <br />
              <p className="text-lg">Tvättprogram</p>
              <p className="text-lg">Integritetspolicy</p>
            </div>
            <div className="lg:py-20 py-5 flex-col">
              <h2 className="text-xl font-semibold text-white">KONTAKT</h2>
              <br />
              <p className="text-lg">info@washclub.se</p>
              <p className="text-lg">073 – 0505051</p>
              <br />
              <a className="text-lg">Fler kontaktuppgifter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
