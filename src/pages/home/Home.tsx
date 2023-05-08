// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
import Hero from '../../components/Home/Hero'
import Donations from '../../components/Home/Donations'
import Services from '../../components/Home/Services'
import Quotes from '../../components/Home/Quotes'
import useReadingProgress from '../../hooks/useReadingProgress'
import Press from '../../components/Home/Press'
import { Partners } from '../about'

const Home = () => {
  const completion = useReadingProgress();
  return (
    <>
     <span 
      style={{transform: `translateX(${completion - 100}%)`}}
      className='fixed z-[100] w-full h-1 bg-primary top-0'
      />
    <Hero />
    <Donations />
    <Services />
    <Quotes />
    <Press />
    <Partners />
    </>
  )
}

export default Home
