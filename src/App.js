import './App.css';
import {Routes,Route} from 'react-router-dom';//npm i react-router-dom
import Footer from './components/Footer';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Loan from './components/Loan';
import Aboutus from './components/Aboutus';
import Profile from './components/Profile';
import Transactions from './components/Transactions';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Deposit from './components/Deposit';
import Dashboard from './components/dashboard';
import Withdraw from './components/withdraw';
import Balance from './components/balance';
import Transfer from './components/transfer';
import Customer from './components/Customer';
import Ahome from './components/Ahome';
import Adlogin from './components/Adlogin';
import List from './components/list';
import Default from './components/Default';
import Investments from './components/Investements';
function App() {
  return (
    <div className="App" >
     
    <Routes>
    <Route exact path='/Investments' element={<Investments/>}/>
    <Route exact path='/' element={<Default/>}/>
    <Route exact path='/Home' element={<Home/>}/>
    <Route exact path='Signin' element={<Signin/>}/>
    <Route exact path='Signup' element={<Signup/>}/>
    <Route exact path='Loan' element={<Loan/>}/>
    <Route exact path='Aboutus' element={<Aboutus/>}/>
    <Route exact path='Profile' element={<Profile/>}/>
    <Route exact path='Transactions' element={<Transactions/>}/>
    <Route exact path='ContactUs' element={<ContactUs/>}/>
    <Route exact path='Deposit' element={<Deposit/>}/>
    <Route exact path='dashboard' element={<Dashboard/>}/>
    <Route exact path='withdraw' element={<Withdraw/>}/>
    <Route exact path='withdraw' element={<Withdraw/>}/>
    <Route exact path='balance' element={<Balance/>}/>
    <Route exact path='transfer' element={<Transfer/>}/>
    <Route exact path='customer' element={<Customer/>}/>
    <Route exact path='Adlogin' element={<Adlogin/>}/>
    <Route exact path='Ahome' element={<Ahome/>}/>
    <Route exact path='list' element={<List/>}/>
     </Routes> 
     <Footer/>
    </div>
  );
}

export default App;
