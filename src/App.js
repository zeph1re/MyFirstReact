import './App.css';
import Header from './components/header/Header';
// import Content from './components/content/Contents';
// import Footer from './components/footer/Footer';
// import Faq from './components/faq/FAQ';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Profile from './components/profile/Profile';

function App() {
  const person = {
    name: 'ganda',
  };

  return (
    <div className="App">
      <Header name="Jalil" age={20} person={person} />
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

      {/* <Content name="Jalil" age={20} />
      <Faq />
      <Footer /> */}
    </div>
  );
}

export default App;
