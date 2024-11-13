import "./App.css";
import { useState } from "react";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/common/Navigation/Navigation";
import Modal from "./components/common/Modal/Modal";
import Home from "./components/Home/Home";
import Media from "./components/Media/Media";
import Details from "./components/Details/Details";
import Person from "./components/Person/Person";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModlaContent] = useState("");

  return (
    <AppContext.Provider value={{ modalOpen, setModalOpen, setModlaContent }}>
      <div className="App">
        <Router>
          <Navigation />
          {modalOpen ? <Modal>{modalContent}</Modal> : ""}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/movie/*" element={<Media />} />
            <Route path="/tv/*" element={<Media />} />
            <Route path="/movie/details/:id" element={<Details />} />
            <Route path="/tv/details/:id" element={<Details />} />
            <Route path="/person/details/:id" element={<Person />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}
export default App;
