import styles from "./transfer.module.css";
import axios from "axios";
import Navbar from "./Navbar";
export default function transfer() {
  const onTransfer = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      from: data.get("from"),
      to: data.get("to"),
      amount: data.get("amount")
    });
    axios.post("http://localhost:3001/transfer", {
      from: data.get("from"),
      to: data.get("to"),
      amount: data.get("amount")
    }).then((response)=>{
      console.log(response.data);
      alert(response.data);
    }).catch((error)=>{
      console.log(error);
      alert("Error occurred while transferring amount");
    });
  };

  return (
    <>
    <Navbar/>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <h1>Transfer Amount</h1>
          <form onSubmit={onTransfer}>
            <div>
              <input type="text" placeholder="Enter From Account Name" name="from" />
            </div>
            <div>
              <input type="text" placeholder="Enter To Account Name" name="to" />
            </div>
            <div>
              <input type="number" placeholder="Enter Amount to Transfer" name="amount" />
            </div>
            <div>
              <button type="submit">Transfer</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}