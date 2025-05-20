import Navbar from "./components/Navbar";
import CoursesNavbar from "./components/CoursesNavbar";
import Sale from "./components/Sale";
import CoursesRecom from "./components/CoursesRecom";
import TopicsRecom  from "./components/TopicsRecom";
import Popular from "./components/Popular";
import Footer from "./components/Footer";


function App() {
  

  return (
    <>
      <Navbar />
     <CoursesNavbar />
     <Sale />
     <CoursesRecom/>
     <TopicsRecom />
     <Popular/>
     <Footer/>
    </>
  )
}

export default App
