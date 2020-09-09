import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase.js';
function App() {

  const [{user},dispatch] = useStateValue();

  //useEffect
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //logged in
      dispatch({
        type:"SET_USER",
        user: authUser
      })
      }else{
        //logout
        dispatch({
          type: "SET_USER",
          user:null,
        })
      }
    })
    return () => {
      //Cleanup
      unsubscribe();
    }
  }, [])

  console.log('user is ' + user);
  return (
    <Router>

    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header/>
          <Checkout />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
        <Header/>
          {/* DEFAULT ROUTE*/}
        <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
