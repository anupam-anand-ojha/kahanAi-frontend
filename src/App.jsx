
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StoryCreator from "./components/StoryCreator.jsx";
import About from "./components/About.jsx";
import MyStories from "./components/MyStories.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";
import StoryResult from "./pages/StoryResult.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StoryCreator />
      <About />
      <MyStories />
      <HowItWorks />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
