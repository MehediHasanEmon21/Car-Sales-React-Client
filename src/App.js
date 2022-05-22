

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Checkout from './pages/Checkout/Checkout';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Detail from './pages/Detail/Detail';
import OrderDone from './pages/OrderDone/OrderDone';
import Payment from './pages/Payment/Payment';
import AllOrders from './pages/AllOrders/AllOrders';
import AddAdmin from './pages/AddAdmin/AddAdmin';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/detail/:id">
            <Detail></Detail>
          </PrivateRoute>
          <PrivateRoute path="/order-done">
            <OrderDone></OrderDone>
          </PrivateRoute>
          <PrivateRoute path="/all-orders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path="/add-admin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
      
      
    </>
    

  );
}

export default App;
