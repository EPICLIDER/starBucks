import Contacts from "./components/Contacts"
import Delicious from "./components/Delicious"
import Events from "./components/Events"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Swiper from "./components/Swiper"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Delicious/>
      <Swiper/>
      <Events/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
