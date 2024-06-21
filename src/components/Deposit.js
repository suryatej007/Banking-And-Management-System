import Navbar from "./Navbar";
import styles from "./deposit.module.css";
import axios from "axios";
export default function Deposit() {
  const onDeposit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const cname=data.get("cname");
    const amount=data.get("amount");
    
    axios.post("http://localhost:3001/deposit",{
      cname,
      amount,
    })
    .then((res)=>{
      alert(res.data)
    })
  };

  return (
    <>
    <Navbar/>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <h1>Deposit Amount</h1>
          <form onSubmit={onDeposit}>
            <div>
              <input type="text" placeholder="Enter Account Name" name="cname" />
            </div>

            <div>
              <input type="number" placeholder="Enter Balance" name="amount" />
            </div>
            <div>
              <button type="submit">Deposit</button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}