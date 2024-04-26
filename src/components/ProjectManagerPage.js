import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const ProjectManagerPage = () => {
  // Sample initial data
  const [data, setData] = useState({
    caratValue: '',
    goldPresentation: '',
    todayMarketPrice: '',
    loanApproval: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h1 className="heading">Project Manager Page</h1>
      <table>
        <thead>
          <tr>
            <th>Carat Value</th>
            <th>Gold Presentation</th>
            <th>Today Market Price</th>
            <th>Loan Approval</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" name="caratValue" value={data.caratValue} onChange={handleChange} /></td>
            <td><input type="text" name="goldPresentation" value={data.goldPresentation} onChange={handleChange} /></td>
            <td><input type="text" name="todayMarketPrice" value={data.todayMarketPrice} onChange={handleChange} /></td>
            <td><input type="text" name="loanApproval" value={data.loanApproval} onChange={handleChange} /></td>
          </tr>
        </tbody>
      </table>
      <button className="button">Update Data</button>
    </div>
  );
}

export default ProjectManagerPage;
