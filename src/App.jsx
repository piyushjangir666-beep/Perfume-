import Header  from './Header'
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Components/Login";
import Perfume from "./Components/Perfume"; 
import Candles from './Components/Candles';
import BestSellers from './BestSellers'
import Exclusive from './Exclusive'
import PerfectBalance from './PerfectBalance'
import ScentJourney from './ScentJourney'
import Summer from './Summer'
import Discover from './Discover'
import Testimonials from './Testimonials'
import Bottemslider from './Bottemslider'
import Video from './Video'
import InFocus from './InFocus' 
import Slider from './Slider';
function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={
          <>
            <Slider/>
            <BestSellers/> 
            <Exclusive/>
            <PerfectBalance/>
            <ScentJourney/>
            <Summer/>  
            <Discover/>
            <InFocus/>
            <Video/>
            <Testimonials/>
            <Bottemslider/>
          </>
        } />

          <Route path="/perfume" element={
          <>
         
           <Perfume/>
          </>
        } />
          <Route path="/Candles" element={
          <>
         
           <Candles/>
          </>
        } />
      </Route> 

    </Routes>         
  )      
}    

export default App

