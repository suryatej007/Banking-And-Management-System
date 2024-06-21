import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import Ahome from './Ahome.js';
import { Link } from "react-router-dom";
 function Adlogin() 
{
    const[un,setUn]=useState(null);
    const [result,setResult]=useState(null);
    function handleSubmit(event)
    {
        alert("Form Submitted");
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
      return(
            <div className='App-login' style={{ border:"3px solid black" }}>
              <h3 style={{  textShadow:"1px 1px 5px blue, -1px -1px 2px black" }}>Admin Login Here</h3>
              <form onSubmit={handleSubmit} style={{ border:"3px solid black" }}>
                User Name: <input type="text" name="un" />
                <br/>
                Password: <input type="password" name="pw" />
                <br/>
                <br/>
                <button type="submit" className="login-btn">Login</button>
                <br/>
                <Link to="/Signup" >
            if not registered Signup
            </Link>
              </form>
              {result}
            </div>
      );
    }
    else{
      return(
        <div>
          <Ahome/>
        </div>
      );
    }
}

export default Adlogin