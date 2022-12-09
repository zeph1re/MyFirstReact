import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Contents';
import Footer from './components/footer/Footer';
import Faq from './components/faq/FAQ';
import User from './components/user/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Profile from './components/profile/Profile';

function App() {
  const person = {
    name: 'ganda',
  };

  return (
    <div className="App">
      <Header name="Jalil" age={20} person={person} />
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/content" element={<Content />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>

      {/* <Content name="Jalil" age={20} />
      <Faq />
      <Footer /> */}
    </div>
  );
}

export default App;
