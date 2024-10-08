import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Layout from "./components/Layout";
import ServicedVehiclesList from "./pages/ServicedVehiclesList";
import HomeDelivery from "./components/HomeDelivery";
import AddressPage from "./components/AddressPage";
import MapPage from "./components/MapPage";
import GmapPage from "./components/GmapPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UploadPhoto from "./pages/UploadPhoto";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route
            path="serviced-vehicles-list"
            element={<ServicedVehiclesList />}
          />
          <Route path="home-delivery/:vid" element={<HomeDelivery />} />
          <Route path="gmappage/:did" element={<GmapPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="uploadImage" element={<UploadPhoto />} />
        </Route>
      </Routes>
      {/*  
        <Route path="addressPage" element={<AddressPage />} /> */}
    </div>
  );
}

export default App;
