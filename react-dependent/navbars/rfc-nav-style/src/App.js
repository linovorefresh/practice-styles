import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
      <main>
        <BrowserRouter>
          
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
