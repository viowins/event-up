export default function Hero() {
  return (
    <section className="bg-neutral-800">
      <div className="container mx-auto py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-y-4">
          <div className="w-full md:w-5/12">
            <h1 className="text-h4 md:text-h1 text-white font-semibold">
              Experience <br /> you can trust
            </h1>
          </div>
          <div className="w-full md:w-5/12 md:pl-10">
            <p className="text-lg md:text-xl text-neutral-50">
              From year to year, we strive to invest in the most innovative
              technology that is used by both small enterprises and space
              enterprises
            </p>
          </div>
        </div>
      </div>
      <img
        src="/AboutImage.png"
        alt="Experience you can trust"
        draggable="false"
      />
    </section>
  );
}
