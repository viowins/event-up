export default function DisplayRoom() {
  return (
    <section>
      <div className="container mx-auto py-14 md:py-[100px] flex flex-col-reverse md:flex-col">
        <div className="w-full md:w-6/12 mx-auto text-center md:mb-16">
          <h3 className="text-h5 md:text-h3 font-semibold text-neutral-800 mb-4">
            Powerful virtual conferencing platform solution
          </h3>
          <p className="text-lg md:text-xl text-neutral-500">
            Dedicated spaces that make it easy to come together.
          </p>
        </div>
        <div className="w-full md:w-10/12 mx-auto mb-8 md:mb-0">
          <img
            src="/DisplayRoom.png"
            alt="Powerful virtual conferencing platform solution"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
