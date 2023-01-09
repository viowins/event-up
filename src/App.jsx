import Header from "./components/Header";
import Hero from "./components/Sections/Hero";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}
