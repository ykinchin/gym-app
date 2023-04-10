import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { SelectedPage } from './shared/types'
import Home from './pages/Home'
import OurBenefits from './pages/OurBenefits'
import OurClasses from './pages/OurClasses'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <div
      className='app bg-gray-20'
      onClick={() => (isTopOfPage ? console.log(window.scrollY, isTopOfPage) : console.log(window.scrollY))}
    >
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <OurBenefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
