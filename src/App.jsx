import Header  from './Header'
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Components/Login";
import BestSellers from './BestSellers'
import Exclusive from './Exclusive'
import PerfectBalance from './PerfectBalance'
import ScentJourney from './ScentJourney'
import Summer from './Summer'
import Discover from './Discover'
import Testimonials from './Testimonials'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={
          <>
            <BestSellers/> 
            <Exclusive/>
            <PerfectBalance/>
            <ScentJourney/>
            <Summer/>  
            <Discover/>
            <Testimonials/>
          </>
        } />
      </Route>
    </Routes>        
  )      
}  

export default App


