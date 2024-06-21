import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
const Transactions= () => {

  const [customerName, setCustomerName] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/Transactions?cname=${customerName}`);
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (customerName) {
      fetchTransactions();
    }
  }, [customerName]);

  return (
    <div>
      <Navbar/>
      <h1>Transaction Page</h1>
      <label htmlFor="customerName">Customer Name:</label>
      <input
        type="text"
        id="customerName"
        value={customerName}
        onChange={handleCustomerNameChange}
      />
      {transactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.date}>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions to display</p>
      )}
    </div>
  );
};

export default Transactions;
