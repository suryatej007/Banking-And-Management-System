import styles from "./customer.module.css";
import axios from "axios";
import Navbar from "./Navbar";
export default function Customer() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          cname :data.get('cname'),
          cphone :data.get('cphone'),
          cemail:data.get('cemail'),
          caddress:data.get('caddress')
          });
          const phone = data.get('cphone');

    if (phone.length !== 10) {
      alert('Phone number should contain 10 digits');
      return;
    }
    const cname = data.get("cname");
    if (cname.trim() === "") {
      alert("Customer name should not be empty");
      return;
    }
          axios.post("http://localhost:3001/customer", {
            cname :data.get('cname'),
            cphone :data.get('cphone'),
            cemail:data.get('cemail'),
            caddress:data.get('caddress')
        }).then((response)=>{
          console.log(response.data);
          alert(" customer form submited")
        });
      };

  return (
    <>
    <Navbar/>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <h1>Create Customer Account</h1>
          <form onSubmit={handleSubmit}>
          <div>
              <input type="text" placeholder="Enter Customer Name" name="cname" />
            </div>
            <div>
              <input type="text" placeholder="Enter Phone Number" name="cphone" />
            </div>
            <div>
              <input type="email" placeholder="Enter Email" name="cemail" />
            </div>
            <div>
          <textarea id="message" name="caddress" placeholder="Enter your Adress" required></textarea>
        </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}