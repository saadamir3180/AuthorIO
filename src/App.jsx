import './styles/App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loading from './components/Loading';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import WorkSpace from './pages/WorkSpace';
import GetStarted from './pages/GetStarted';
import HowItWorks from './pages/HowItWorks';
import NotFound from './pages/NotFound';
import ELibrary from './pages/ELibrary';
import User from './pages/User';

function App() {

  const [ loading, user ] = useAuthState(auth)
   return (
    <Router>
    <div className='App'>
            {loading || !user ? 
            <>
      <Header/>
            <div className='fullPage'>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/HowItWorks' exact element={<HowItWorks/>} />
            <Route path='/WorkSpace' exact element={<WorkSpace/>} />
            <Route path='/GetStarted' exact element={<GetStarted/>} />
            <Route path='/ELibrary' exact element={<ELibrary/>} />
            <Route path='/user/:email' exact element={<User/>} />
            <Route path='*' exact element={<NotFound/>} />
              
          </Routes>
          </div>
      <Footer/>
      </>:<Loading/>
    }
    </div>
    </Router>
  )
}

export default App
