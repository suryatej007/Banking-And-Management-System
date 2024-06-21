import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";
import bankImg from "./images/bank.png";
import Navbar from "./Navbar";
export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
     <Navbar/>
      <main className={styles.outer_container}>
        <div className={styles.img_container}>
          <img src={bankImg} alt="bank-img" className={styles.bankImg} />
        </div>
        <div className={styles.dashContainer}>
          <div onClick={() => navigate("/Customer")}>Create Customer Account</div>
          <div onClick={() => navigate("/Deposit")}>Deposit</div>
          <div onClick={() => navigate("/withdraw")}>Withdraw</div>
          <div onClick={() => navigate("/transfer")}>Transfer</div>
          <div onClick={() => navigate("/balance")}>Check Balance</div>
          <div onClick={() => navigate("/List")}>Customer</div>
        </div>
      </main>
    </>
  );
}
