
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
function List() {
    
    const [result,setResult] = useState(null);
    const [disidemail,setIdemail] = useState(0);
    const [excludeemail,setExcludeemail] = useState(0);

    const isDict = dict => {
        return typeof dict === "object" && !Array.isArray(dict);
    };

    var dis_id_email=0;

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:3001/customer', {
            cname :data.get('cname'),
            cphone :data.get('cphone'),
            cemail:data.get('cemail'),
            caddress:data.get('caddress')
        }).then((resposnse)=>{
            console.log(resposnse.data);
        })
    }

    function showOne() {
        setIdemail(0);
        setExcludeemail(0);
        axios.get('http://localhost:3001/show_one_stu', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAll() {
        setIdemail(0);
        setExcludeemail(0);
        axios.get('http://localhost:3001/show_all', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showIdDept(){
        setIdemail(1);
        setExcludeemail(0);
        console.log(dis_id_email);
        axios.get('http://localhost:3001/show_all', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showExceptDept(){
        setIdemail(0);
        setExcludeemail(1);
        axios.get('http://localhost:3001/show_all', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    if(result == null) {
        return(
            <div>
                 <Navbar/>
                 <br/>
                <form onSubmit={handleSubmit}>
                    Customer Name: <input type="text" name="cname" />
                    <br/>
                    Phone: <input type="text" name="cphone" />
                    <br/>
                    Email: <input type="text" name="cemail" />
                    <br/>
                    Address: <input type="text" name="caddress" />
                    <br/><br/>
                    <input type="submit" value="Save Customer Data" />
                </form>
                <br/>
                <button onClick={()=>showOne()}>Display First Customer in Database</button>
                <br/>
                <button onClick={()=>showAll()}>Display All Customer</button>
                <br/> 
                <button onClick={()=>showIdDept()}>Display Customer_cname and cemail</button>
                <br/> 
                <button onClick={()=>showExceptDept()}>Display All Field Except cemail</button>
                <br/> 
            </div>
        );
    }
    else {
            if(isDict(result)) 
            {
                return (
                    <div>
                        <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                            <tr>
                                <th style={{ border: '1px solid black' }}> Customer cname </th> 
                                <th style={{ border: '1px solid black' }}> Customer cphone </th> 
                                <th style={{ border: '1px solid black' }}> Customer cemail</th> 
                                <th style={{ border: '1px solid black' }}> Customer caddress</th>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black' }}> {result.cname} </td>
                                <td style={{ border: '1px solid black' }}> {result.cphone} </td>
                                <td style={{ border: '1px solid black' }}> {result.cemail} </td>
                                <td style={{ border: '1px solid black' }}> {result.caddress} </td>
                            </tr>
                        </table>
                    </div>
                );
            }
            else {
        
                if(disidemail===1){
                    return (
                        <div>
                            <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <tr>
                                    <th style={{ border: '1px solid black' }}> Customer cname </th> 
                                    <th style={{ border: '1px solid black' }}> Customer cemail </th> 
                                </tr>
                                {result.map((obj)=>{
                                    return(
                                        <tr>
                                            <td style={{ border: '1px solid black' }}> {obj.cname} </td>
                                            <td style={{ border: '1px solid black' }}> {obj.cemail} </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    );
                }
                else if(excludeemail===1)
                {
                    return (
                        <div>
                            <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <tr>
                                    <th style={{ border: '1px solid black' }}> Customer cname</th> 
                                    <th style={{ border: '1px solid black' }}> Customer cphone</th> 
                                    <th style={{ border: '1px solid black' }}> Customer caddress </th>
                                </tr>
                                {result.map((obj)=>{
                                    return(
                                        <tr>
                                            <td style={{ border: '1px solid black' }}> {obj.cname} </td>
                                            <td style={{ border: '1px solid black' }}> {obj.cphone} </td>
                                            <td style={{ border: '1px solid black' }}> {obj.caddress} </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                                <tr>
                                <th style={{ border: '1px solid black' }}> Customer cname </th> 
                                <th style={{ border: '1px solid black' }}> Customer cphone </th> 
                                <th style={{ border: '1px solid black' }}> Customer cemail</th> 
                                <th style={{ border: '1px solid black' }}> Customer caddress</th>
                                </tr>
                                {result.map((obj)=>{
                                    return(
                                        <tr>
                                <td style={{ border: '1px solid black' }}> {obj.cname} </td>
                                <td style={{ border: '1px solid black' }}> {obj.cphone} </td>
                                <td style={{ border: '1px solid black' }}> {obj.cemail} </td>
                                <td style={{ border: '1px solid black' }}> {obj.caddress} </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    );
                }
            }
        }
}

export default List;