import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyStories from "./components/MyStories";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import StoryCreator from "./components/StoryCreator";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StoryCreator/>
      <About />
      <MyStories />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
