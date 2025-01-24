export default function Footer() {
  return (
    <>
      <div>
        <div className="bg-[#312f73]  text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="md:py-20 py-5 flex-col md:px-20 px-5">
              <h2 className="text-xl font-semibold text-white">HÄR FINNS VI</h2>
              <br />
              <p className="text-lg">Skoghall</p>
              <p className="text-lg">Säffle</p>
              <p className="text-lg">Åmål</p>
            </div>
            <div className="md:py-20 py-5 flex-col md:px-20 px-5">
              <h2 className="text-xl font-semibold text-white">OM OSS</h2>
              <br />
              <p className="text-lg">Tvättprogram</p>
              <p className="text-lg">Integritetspolicy</p>
            </div>
            <div className="md:py-20 py-5 flex-col md:px-20 px-5 col-span-2">
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
