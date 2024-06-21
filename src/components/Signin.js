import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import Home from './Home.js';
import { Link } from "react-router-dom";
import Navbar2 from './Navbar2';
function Signin() 
{
    const[un,setUn]=useState(null);
    const [result,setResult]=useState(null);
    function handleSubmit(event)
    {
        alert("You have successfully logged In");
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setUn(data.get("un"));
        const pw = data.get("pw");
        console.log(un+" --- "+pw);
        axios.get('http://localhost:3001/check',{
          params:{
          un: un,
          pw: pw
        }
      }).then((response)=>{
          console.log(response.data);
          setResult(response.data);
          
        });
      }
      if((result===null || result==="FAIL")){
      return(<>
      <Navbar2/>
            <div className='App-login' style={{ border:"3px solid black" }}>
              <h3 style={{  textShadow:"1px 1px 5px blue, -1px -1px 2px black" }}>Login Here</h3>
              <form onSubmit={handleSubmit} style={{ border:"3px solid black" }}>
                User Name: <input type="text" name="un" />
                <br/>
                Password: <input type="password" name="pw" />
                <br/>
                <br/>
                <button type="submit" className="login-btn">Login</button>
                <br/>
                <Link to="/Signup" >
             If not registered Signup
            </Link>
              </form>
              
              {result}
            </div>
            </>
      );
    }
    else{
      return(
        <div>
          <Home />
        </div>
      );
    }
}

export default Signin