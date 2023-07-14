import {
  BrowserRouter as
    Router,
    Route,
    Routes
} from 'react-router-dom';
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Footer.scss';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
