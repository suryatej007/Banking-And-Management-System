import styles from "./customer.module.css";
import axios from "axios";
import Navbar from "./Navbar";
export default function Withdraw() {
  const onWithdraw = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      cname: data.get("cname"),
      amount: data.get("amount")
    });
    axios.post("http://localhost:3001/withdraw", {
      cname: data.get("cname"),
      amount: data.get("amount")
    }).then((response)=>{
      console.log(response.data);
      alert(response.data);
    }).catch((error)=>{
      console.log(error);
      alert("Error occurred while withdrawing amount");
    });
  };

  return (
    <>
    <Navbar/>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <h1>Withdraw Amount</h1>
          <form onSubmit={onWithdraw}>
            <div>
              <input type="text" placeholder="Enter Customer Name" name="cname" />
            </div>
            <div>
              <input type="number" placeholder="Enter Amount to Withdraw" name="amount" />
            </div>
            <div>
              <button type="submit">Withdraw</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}