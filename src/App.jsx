import Header from "./components/Header";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import DisplayRoom from "./components/Sections/DisplayRoom";
import AllFeatures from "./components/Sections/AllFeatures";
import GettingMessage from "./components/Sections/GettingMessage";
import SetupConferences from "./components/Sections/SetupConferences";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <DisplayRoom />
      <AllFeatures />
      <GettingMessage />
      <SetupConferences />
    </>
  );
}
