import SubTitle from "../../../components/UIComponents/SubTitle";

export default function AllFeatures() {
  return (
    <section className="bg-neutral-800">
      <article className="relative md:bg-[url('/AllFeaturesOverlay2.png')] md:bg-no-repeat md:bg-[length:100%_100%]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-8 pt-14 pb-10 md:py-[105px]">
            <div className="w-full md:w-6/12">
              <SubTitle>ALL FEATURES</SubTitle>
              <h3 className="text-h5 md:text-h3 text-white font-semibold mb-6">
                Video calls loved by <br /> extraordinary teams.
              </h3>
              <p className="text-lg text-neutral-50 mb-10">
                Making hybrid‑conference inclusive with unique audio technology.
              </p>
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="w-full md:w-6/12">
                  <ul className="list-tick text-white">
                    <li>Intergration with google meet</li>
                    <li>Get data event analytics</li>
                    <li>Protect events with a passcode</li>
                  </ul>
                </div>
                <div className="hidden md:block w-full md:w-6/12">
                  <ul className="list-tick text-white">
                    <li>Messages with participation</li>
                    <li>Advanced Q&A settings</li>
                    <li>Crowdsource questions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 flex md:justify-end">
              <img
                className="max-w-[637px] w-full"
                src="/AllFeatures.png"
                alt="Video calls loved by extraordinary teams."
                draggable="false"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="relative md:bg-[url('/AllFeaturesOverlay.png')] md:bg-no-repeat md:bg-[length:100%_100%]">
        <div className="container mx-auto">
          <div className="flex items-center flex-col md:flex-row gap-8 pt-10 pb-20 md:py-[100px]">
            <div className="w-full md:w-6/12">
              <img
                className="max-w-[611px] w-full"
                src="/AllFeatures2.png"
                alt="Fast, reliable and secure for your conferences"
                draggable="false"
              />
            </div>
            <div className="w-full md:w-6/12">
              <SubTitle>BENEFITS OF YOU</SubTitle>
              <h3 className="text-h5 md:text-h3 text-white font-semibold mb-6">
                Fast, reliable and secure <br /> for your conferences
              </h3>
              <p className="text-lg text-neutral-50 mb-10">
                By using us, get the benefits that make it easier for you in the{" "}
                <br />
                conference for your convenience and the participants
              </p>
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="w-full md:w-6/12">
                  <ul className="list-tick text-white">
                    <li>Intergration with google meet</li>
                    <li>Get data event analytics</li>
                    <li>Protect events with a passcode</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
