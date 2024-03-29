import React from "react";
import { 
  createBrowserRouter,
     Route,
      NavLink,
      createRoutesFromElements,
      RouterProvider
     } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";



const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="About" element={< About />}/>
        <Route path="help" element={ <HelpLayout />}>
          <Route path="faq" element={<Faq/>} />  
          <Route path="contact" element={<Contact />} />
        </Route>
    </Route>
  )
)

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
   
  );
}

export default App;
