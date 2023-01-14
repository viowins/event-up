import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import DisplayRoom from "../components/Sections/DisplayRoom";
import AllFeatures from "../components/Sections/AllFeatures";
import GettingMessage from "../components/Sections/GettingMessage";
import SetupConferences from "../components/Sections/SetupConferences";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DisplayRoom />
      <AllFeatures />
      <GettingMessage />
      <SetupConferences />
    </>
  );
}
