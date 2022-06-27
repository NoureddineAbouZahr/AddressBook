import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Login from './components/Login';
import ContactsPage from './components/ContactsPage';
import Signup from './components/Signup';
import AddContact from './components/AddContact';

function App() {
  return (
    <Router>
      <Routes>
    <Route  exact path='/' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
        
    <Route path='/contacts' element={<ContactsPage />}></Route>
    <Route path='/addContact' element={<AddContact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
