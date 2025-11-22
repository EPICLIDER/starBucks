import Delicious from "./components/Delicious"
import Events from "./components/Events"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Swiper from "./components/Swiper"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Delicious/>
      <Swiper/>
      <Events/>
    </>
  )
}

export default App
