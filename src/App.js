import './App.css';
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import Navlinks from './Navlinks'
import Article from './Article'
import Page404 from './Page404'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/produit">
            <Header />
            <Navlinks/>
            <Article />
            <Footer/>
          </Route>
          <Route exact path="/">
            <Header />
            <Navlinks/>
            <Home />
            <Footer/>
          </Route>
          <Route>
            <Redirect to="/Oops" />
            <Header />
            <Navlinks/>
            <Page404 />
            <Footer />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
