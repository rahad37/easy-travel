import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Travel from './Components/Travel/Travel';
import LogIn from './Components/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path='/header'>
          <Header/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <PrivateRoute path='/travel'>
          <Travel></Travel>
        </PrivateRoute>
        <Route path='/logIn'>
          <LogIn></LogIn>
        </Route>
        <Route path='/'>
          <Header/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
