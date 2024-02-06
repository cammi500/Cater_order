import "./App.css";
import { Header } from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PageNotFound } from "./components/pages/pageNotFound";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
