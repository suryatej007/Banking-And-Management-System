import React, { useState } from 'react';
import Navbar from './Navbar';
function Investments() {
  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [total, setTotal] = useState(0);

  const calculateReturn = () => {
    const interestAmount = principal * interest * years;
    const totalReturn = principal + interestAmount;
    setTotal(totalReturn);
  }

  return (
    <div>
      <Navbar/>
      <h1>Investment Calculator</h1>
      <form>
        <label>Principal:</label>
        <input type="text" value={principal} onChange={e => setPrincipal(e.target.value)} />
        <br />
        <label>Interest Rate:</label>
        <input type="text" value={interest} onChange={e => setInterest(e.target.value)} />
        <br />
        <label>Number of Years:</label>
        <input type="text" value={years} onChange={e => setYears(e.target.value)} />
        <br />
        <button onClick={calculateReturn}>Calculate Return</button>
      </form>
      <h2>Total Return: ${total}</h2>
    </div>
  );
}

export default Investments;