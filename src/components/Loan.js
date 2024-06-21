import React, { useState } from 'react';

import './Loan.css';
import Navbar from './Navbar';
export default function Loan() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div className="LoanCalculator">
       <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <h2>Loan Calculator</h2>
      <form>
        <label>
          Loan Amount:
          <input type="number" value={loanAmount} onChange={handleLoanAmountChange} />
        </label>
        <br />
        <label>
          Interest Rate:
          <input type="number" value={interestRate} onChange={handleInterestRateChange} />
        </label>
        <br />
        <label>
          Loan Term (years):
          <input type="number" value={loanTerm} onChange={handleLoanTermChange} />
        </label>
        <br />
        <button type="button" onClick={calculateMonthlyPayment}>
          Calculate
        </button>
      </form>
      <div className="MonthlyPayment">
        <h3>Monthly Payment:</h3>
        <p>{`$${monthlyPayment}`}</p>
      </div>
    </div>
  );
}
