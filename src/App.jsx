import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Feature from './components/Feature';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';


const App= () => {
  return (
  //  <h1 classNmae="text-3xl font-bold underline">
  //   hello world
  //  </h1>
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Feature />
   
    <HowItWorks />
    <Footer />
   
  </main>
  )
}

export default App
