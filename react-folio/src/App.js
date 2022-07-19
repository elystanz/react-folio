import React, { useEffect, useState } from 'react';

import "./App.css"

import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [section, setSection] = useState("main")

  return (
    
    <>
      <Header section={section} setSection={setSection} />
      <Nav/>
        <div className="App">

          < AboutMe />
          {section === "main" && < Main />}
          < Resume />

        </div>
      <Footer />
    </>

    
  )
}

export default App;
