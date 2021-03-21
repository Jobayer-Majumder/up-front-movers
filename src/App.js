import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header/Header';
import Home from './component/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './component/booking/Booking';
import Login from './component/login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import NotFound from './component/notFound/NotFound';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser ] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/destination/:service'>
            <Booking />
          </PrivateRoute>
          <Route path='/login'>
             <Login /> 
          </Route>
          <Route path='/contact'>
             <Contact /> 
          </Route>
          <Route path='/blog'>
             <Blog /> 
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
