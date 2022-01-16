import React, { createContext, useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Resister from './components/Resister/Resister';
import Account from './components/Account/Account';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Adminbar from './components/AdminBar/Adminbar';
import Admin from './components/Admin/Admin';
import AddNew from './components/AddNew/AddNew';



export const UserContext = createContext()

function App() {

  const [loggedInuser,setloggedInuser] = useState({})

  return (
    <div className="App">

    <UserContext.Provider value={[loggedInuser,setloggedInuser]}>
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/login" element={ <Login/> }></Route>
          <Route path="/resister/:id" element={ <PrivateRoute>
            <Resister/>
          </PrivateRoute> }></Route>
          <Route path="/account" element={ <Account/> }></Route>
          <Route path="/adminbar" element={ <Adminbar/> }></Route>
          <Route path="/showlist" element={ <Admin/> }></Route>
          <Route path="/addnew" element={ <AddNew/> }></Route>
          <Route path="/*" element={ <NotFound/> }></Route>
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

