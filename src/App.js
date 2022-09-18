import { Routes, Route } from "react-router-dom";

import React, { useEffect, Fragment } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./routes/home/home.componet";
// import About from "./routes/about/about.component";
import NotFound from "./routes/notfound/notfound.component";
import Navigation from "./components/navigation/navigation.component";
import Footer from "./routes/footer/footer.component";

import Costume from "./routes/costume/costume.component";

import Topics from "./components/topics/topics.component";
import About from "./routes/about/about.component";
import Contact from "./routes/contact/contact.component";
import CostumeProject from "./components/projects/costume-project.component";
import Logo from "./routes/logo/logo.component";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Logo />} />
        <Route
          path="/"
          element={
            <Fragment>
              <Navigation />
              <Footer />
            </Fragment>
          }
        >
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />

          <Route path="/contact/" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/home/*" element={<Topics />}>
            <Route path=":topicId" element={<Costume />}>
              <Route path=":projectId" element={<CostumeProject />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
