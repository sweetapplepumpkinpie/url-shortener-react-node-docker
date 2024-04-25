import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./components/Form/Form";
import NotFound from "./components/NotFound";
import Url from "./components/Url";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/:urlId" element={<Url />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
