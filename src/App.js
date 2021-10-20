import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import BookingService from './Pages/BookingService/BookingService';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Header />
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/booking/:serviceID">
            <BookingService></BookingService>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route to="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
