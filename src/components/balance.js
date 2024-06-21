import styles from "./customer.module.css";
import axios from "axios";
import Navbar from "./Navbar";
export default function Balance() {
  const onCheckBalance = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      cname: data.get("cname"),
    });
    axios.get(`http://localhost:3001/checkbalance?cname=${data.get("cname")}`)
      .then((response)=>{
        console.log(response.data);
        alert(` ${response.data}`);
      })
      .catch((error)=>{
        console.log(error);
        alert("Error occurred while checking balance");
      });
  };

  return (
    <>
    <Navbar/>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <h1>Check Balance</h1>
          <form onSubmit={onCheckBalance}>
            <div>
              <input type="text" placeholder="Enter Customer Name" name="cname" />
            </div>
            <div>
              <button type="submit">Check Balance</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}