
import '../../App.css';

import Landing from "../Landing";
import Welcome from "../Welcome";
import Login from "../Login";
import Signup from "../Signup";
import ErrorPage from "../ErrorPage";
import Header from "../Header";
import Footer from "../Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function Index() {
  return (
      <Router>
          <Header />

          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
      </Router>
  );
}

export default Index;
