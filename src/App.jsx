import './styles/App.css'
import AuthorIO from './components/AuthorIo'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import WorkSpace from './pages/WorkSpace';
import GetStarted from './pages/GetStarted';
import HowItWorks from './pages/HowItWorks';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
    <div className='App'>
      <Header/>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/HowItWorks' exact element={<HowItWorks/>} />
            <Route path='/WorkSpace' exact element={<WorkSpace/>} />
            <Route path='/GetStarted' exact element={<GetStarted/>} />
            <Route path='*' exact element={<NotFound/>} />
            
          </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
