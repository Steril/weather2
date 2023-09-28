   import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Locations from './pages/Locations';

import Header from './components/Header';
import Footer from './components/Footer';

import UserContext from './contexts/UserContext';

import api from './utils/api';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.getCurrentUser();
        setUser(response.data); 
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/locations" component={Locations} />
        </Switch>

        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
