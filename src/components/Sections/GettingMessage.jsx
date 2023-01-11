export default function GettingMessage() {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row items-start md:justify-evenly gap-y-10">
          <div className="w-full md:w-4/12 flex items-center gap-x-4">
            <img
              className="w-[56px] md:w-[80px] h-[56px] md:h-[80px] rounded-full"
              src="/MaskingManPhoto.png"
              alt="Masking Man Photo"
              draggable="false"
            />
            <div className="grid">
              <strong className="text-xl md:text-[24px] text-[#292D32] font-semibold">
                Sunaryo Situmorang
              </strong>
              <small className="text-md md:text-lg text-neutral-500">
                Founder & CEO | eventup
              </small>
            </div>
          </div>
          <div className="relative w-full md:w-5/12 flex md:justify-end">
            <div>
              <div className="relative md:absolute md:top-[-29px] md:left-[-49px] w-[75px] h-[75px] flex items-center justify-center rounded-full bg-primary-800/10">
                <img
                  src="/ui/double-quotes.svg"
                  alt="Double Quotes"
                  draggable="false"
                />
              </div>
              <h3 className="text-[32px] md:text-h3 text-neutral-800 font-medium md:font-semibold mt-[-32px] md:mt-0 pl-[32px] md:pl-0">
                <span className="inline">
                  Our goal is to build software that enables users who need it
                  to launch their products in this pandemic and all-digital{" "}
                </span>
                <span className="inline-flex items-start gap-x-2">
                  time
                  <img
                    src="/ui/double-quotes.svg"
                    alt="Double Quotes"
                    draggable="false"
                  />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
