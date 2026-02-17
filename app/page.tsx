import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import LiveNewsPage from "./components/sections/Live"
import Footer from "./components/layout/Footer"
import  Contact  from "./components/sections/Contact"

export default function Home() {
  return (
    <>
      <Header />
       <Hero />
      <About />
      <Services/>
      <LiveNewsPage/>
      <Contact/>
      <Footer />  
      
    </>
  );
}
