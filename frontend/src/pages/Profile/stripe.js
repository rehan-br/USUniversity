import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [description, setDescription] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      
      const paymentData = {
        amount,
        currency,
        description
      };
  
    
      const response = await axios.post('http://localhost:3001/payment/process', paymentData);
  
     
      console.log(response.data);
     
      window.alert('Payment processed successfully');
  
      
  
    } catch (error) {
    
      console.error(error);
      
      window.alert('Payment failed. Please try again.');
    }
  };
  
    
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Form</h2>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
     <Link to="/profile3"><button type="submit">Submit Payment</button></Link>
      
    </form>
  );
};

export default PaymentForm;
