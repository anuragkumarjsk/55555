import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


import TopNavBar from './Components/TopNavBar'
import Dashboard from './Components/TabDashboard'
import OrderForm from './Components/TabForm'
import ShowOrders from './Components/TabShoworders'

function App() {
  return (
    <div className="App">

         <BrowserRouter>
         <TopNavBar/>
         <Switch>
         <Route exact path="/" component={Dashboard}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/form" component={OrderForm}></Route>
                <Route path="/orders" component={ShowOrders}></Route>
         </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
