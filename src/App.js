import './App.css';
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import Navlinks from './Navlinks'
import Article from './Article'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {auth} from './firebase'
import {useEffect} from 'react'
import { useStateValue } from './StateProvider';

function App() {
  const [{loggedinuser}, dispatch] = useStateValue();
  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      }else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
      document.title = "Family Games"
    })
    return () => {
      unsubscribe();
    }
  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Navlinks/>
            <Checkout/>
            <Footer/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/produit">
            <Header />
            <Navlinks/>
            <Article />
            <Footer/>
          </Route>
          <Route path="/">
            <Header />
            <Navlinks/>
            <Home />
            <Footer/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
