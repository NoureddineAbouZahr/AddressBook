import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Login from './components/Login';
import ContactsPage from './components/ContactsPage';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
    <Route  exact path='/Login' element={<Login />}></Route>
    <Route path='/contacts' element={<ContactsPage />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
