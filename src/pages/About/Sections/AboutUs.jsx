import SubTitle from "../../../components/UIComponents/SubTitle";

export default function AboutUs() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:px-[104px] py-14 md:py-[105px] gap-y-6">
            <div className="w-full md:w-5/12">
              <SubTitle>ABOUT US</SubTitle>
              <h3 className="text-h5 md:text-h3 font-semibold text-neutral-800">
                We provide enterprises with innovative technology
              </h3>
            </div>
            <div className="w-full md:w-5/12">
              <p className="text-lg md:text-xl text-neutral-500 md:pt-8">
                Discover radically unique video calls designed to help
                hybrid-conferences teams create, collabrate and celebrate
                together.
                <br />
                <br />
                We are here with a solution that can solve your problem. The
                impact of covid is extraordinary, but it won't be an obstacle
                for you to develop your product to the public.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
