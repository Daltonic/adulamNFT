import { useEffect } from 'react'
import { useGlobalState } from './store'
import { isWallectConnected, loadNfts } from './Adulam'
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'

const App = () => {
  const [nfts] = useGlobalState('nfts')

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks artworks={nfts} />
      <Footer />
      <Loading />
      <Alert />
    </div>
  )
}

export default App
