import './App.css';
import { API_KEY, API_URL } from './config';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
