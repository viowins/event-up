import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function Hero() {
  return (
    <>
      <section className="bg-neutral-800">
        <div className="container mx-auto">
          <article className="flex flex-col-reverse lg:flex-row items-center justify-between pt-10 pb-14">
            <div className="w-full lg:w-6/12 text-neutral-50">
              <h1 className="text-white text-h3 sm:text-h2 md:text-h1 lg:text-h2 xl:text-h1 font-semibold mb-4 md:mb-6">
                Reliable, secure
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline"
                >
                  <path
                    d="M14.4884 2.03443C14.5674 2.03522 14.648 2.05003 14.7195 2.07936C14.8656 2.13478 14.9816 2.24261 15.0447 2.37624C15.1071 2.50991 15.11 2.66057 15.0545 2.7982C15.0545 2.7982 14.9566 3.61001 14.6338 4.93892C13.5932 9.24072 11.8696 13.3817 9.5204 17.2319L8.514 18.7358C8.48754 18.8045 8.44554 18.8687 8.38828 18.9222C8.33371 18.9761 8.26918 19.019 8.19456 19.0485C8.12063 19.0785 8.04253 19.0942 7.96029 19.096C7.88121 19.0952 7.80063 19.0804 7.72915 19.0511C6.7589 18.7058 8.52519 13.3955 8.87185 12.4682C9.43749 10.9233 10.8116 7.61771 11.6016 6.16028C12.3073 4.87027 13.0878 3.61183 13.9346 2.39464C13.9611 2.32591 14.0031 2.26175 14.0604 2.20828C14.1149 2.15436 14.1795 2.11145 14.2541 2.08198C14.328 2.05254 14.4068 2.03623 14.4884 2.03443Z"
                    fill="white"
                  />
                  <path
                    d="M27.2341 25.5128C27.2483 25.5906 27.249 25.6725 27.2338 25.7482C27.207 25.9022 27.1232 26.0365 27.0039 26.1238C26.8845 26.2104 26.7371 26.2419 26.5914 26.2134C26.5914 26.2134 25.7758 26.2712 24.4098 26.2062C19.9887 25.9999 15.5962 25.0924 11.3704 23.5156L9.70305 22.8125C9.63055 22.7995 9.55954 22.7705 9.49619 22.7244C9.4329 22.681 9.37854 22.6258 9.33545 22.5581C9.29194 22.4912 9.26181 22.4175 9.24442 22.3371C9.2302 22.2593 9.22946 22.1774 9.24472 22.1016C9.39984 21.0835 14.9486 21.8112 15.9249 21.9758C17.5489 22.2384 21.0551 22.961 22.6358 23.4605C24.0362 23.9088 25.4198 24.4367 26.7754 25.0374C26.8479 25.0503 26.9189 25.0794 26.9822 25.1255C27.0455 25.1689 27.0999 25.2241 27.143 25.2918C27.1859 25.3588 27.2168 25.433 27.2341 25.5128Z"
                    fill="white"
                  />
                  <path
                    d="M24.8565 10.7039C24.9199 10.7512 24.9763 10.8106 25.0167 10.8764C25.102 11.0073 25.1322 11.1628 25.1043 11.3079C25.076 11.4527 24.9895 11.5762 24.8635 11.6546C24.8635 11.6546 24.3059 12.2526 23.2617 13.1357C19.8851 15.997 16.0516 18.3256 11.8841 20.0506L10.1846 20.672C10.1227 20.7119 10.051 20.739 9.97318 20.7485C9.89731 20.7599 9.81989 20.7565 9.74224 20.7363C9.66482 20.717 9.59253 20.6835 9.52502 20.6365C9.46161 20.5893 9.40525 20.5298 9.3648 20.464C8.78466 19.6131 13.342 16.3651 14.1687 15.8204C15.5363 14.9061 18.5951 13.0461 20.0924 12.3346C21.4229 11.7087 22.7953 11.1524 24.1969 10.6684C24.2588 10.6285 24.3305 10.6014 24.4083 10.592C24.4842 10.5806 24.5616 10.584 24.6393 10.6042C24.7164 10.624 24.7896 10.6573 24.8565 10.7039Z"
                    fill="white"
                  />
                </svg>
                <br className="hidden md:inline" /> conference to get{" "}
                <br className="hidden md:inline" /> the best events
              </h1>
              <p className="text-lg md:text-xl mb-10 md:mb-14">
                Hold incredible events, share knowledge, build and grow your
                product , create opportunity
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button.Primary className={"w-full sm:w-auto justify-center"}>
                  Create Conference
                </Button.Primary>
                <Button.OutlineWhite
                  className={
                    "flex items-center gap-2 w-full sm:w-auto justify-center"
                  }
                >
                  Watch story
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0248 4.94141L17.0831 9.99974L12.0248 15.0581"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.91663 10H16.9416"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button.OutlineWhite>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
              <img
                src="/Hero.png"
                alt="Reliable, secure conference to get the best events"
                draggable="false"
              />
            </div>
          </article>
        </div>
      </section>
      <section className="bg-neutral-700">
        <div className="container mx-auto py-8">
          <article className="flex flex-row items-center justify-center sm:justify-between flex-wrap md:flex-nowrap">
            <a href="https://slack.com/" target={"_blank"}>
              <img src="/ui/content.svg" alt="Slack" draggable="false" />
            </a>
            <a href="https://netflix.com/" target={"_blank"}>
              <img src="/ui/content-1.svg" alt="Netflix" draggable="false" />
            </a>
            <a href="https://google.com/" target={"_blank"}>
              <img src="/ui/content-2.svg" alt="Google" draggable="false" />
            </a>
            <a href="https://airbnb.com/" target={"_blank"}>
              <img src="/ui/content-3.svg" alt="Airbnb" draggable="false" />
            </a>
            <a href="https://unicef.org/" target={"_blank"}>
              <img src="/ui/content-4.svg" alt="Unicef" draggable="false" />
            </a>
            <a href="https://adobe.com/" target={"_blank"}>
              <img src="/ui/content-5.svg" alt="Adobe" draggable="false" />
            </a>
            <a href="https://microsoft.com/" target={"_blank"}>
              <img src="/ui/content-6.svg" alt="Microsoft" draggable="false" />
            </a>
            <a href="https://shipbob.com/" target={"_blank"}>
              <img src="/ui/content-7.svg" alt="ShipBob" draggable="false" />
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
