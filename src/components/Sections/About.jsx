export default function About() {
  return (
    <section className="bg-gray">
      <div className="container mx-auto py-14 md:py-20">
        <article className="flex flex-col md:flex-row items-center justify-end gap-8 md:gap-20">
          <div className="w-full lg:w-5/12">
            <img
              src="/About.png"
              alt="Everyone on their own device."
              draggable="false"
            />
          </div>
          <div className="w-full lg:w-5/12">
            <div className="max-w-lg">
              <h1 className="text-h5 md:text-h3 font-semibold text-neutral-800 mb-4 md:mb-6">
                Everyone on their own device.
              </h1>
              <p className="text-lg md:text-xl text-neutral-500">
                <b>EventUp</b> is designed to be inclusive, by being able to use
                your own device to help hybrid-conference teams create,
                collaborate and celebrate together.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
