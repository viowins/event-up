import Button from "../Button";

export default function SetupConferences() {
  return (
    <section>
      <div className="container mx-auto py-6 md:py-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-8 bg-orange rounded-[15px] px-6 md:px-[104px] py-14 md:py-[105px]">
          <div className="w-full md:w-5/12">
            <h3 className="text-h3 text-white font-semibold mb-4">
              Ready to setup your next conference?
            </h3>
            <p className="text-lg text-neutral-50">
              Build opportunities for future opportunities for products,
              startups.
            </p>
          </div>
          <div className="w-full md:w-5/12 flex flex-col md:flex-row md:items-center md:justify-end gap-x-6 gap-y-4">
            <Button.Primary className={"w-full sm:w-auto justify-center"}>
              Create Conference
            </Button.Primary>
            <Button.OutlineWhite className={"w-full sm:w-auto justify-center"}>
              Watch story
            </Button.OutlineWhite>
          </div>
        </div>
      </div>
    </section>
  );
}
