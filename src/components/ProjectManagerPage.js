import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const ProjectManagerPage = () => {
  const [data, setData] = useState([
    { carat: 24, goldPercentage: 100, todayMarketPrice: 174545.45, loanApprovalValue: 136000 },
    { carat: 22, goldPercentage: 100, todayMarketPrice: 160000, loanApprovalValue: 125000 },
    { carat: 21, goldPercentage: 95.45, todayMarketPrice: 152727.27, loanApprovalValue: 119000 },
    { carat: 20, goldPercentage: 90.91, todayMarketPrice: 145454.55, loanApprovalValue: 114000 },
    { carat: 19, goldPercentage: 86.36, todayMarketPrice: 138181.82, loanApprovalValue: 108000 },
    { carat: 18, goldPercentage: 81.82, todayMarketPrice: 130909.09, loanApprovalValue: 102000 },
    { carat: 17, goldPercentage: 77.27, todayMarketPrice: 123636.36, loanApprovalValue: 97000 },
    { carat: 16, goldPercentage: 72.73, todayMarketPrice: 116363.64, loanApprovalValue: 91000 },
    { carat: 15, goldPercentage: 68.18, todayMarketPrice: 109090.91, loanApprovalValue: 85000 },
    { carat: 14, goldPercentage: 63.64, todayMarketPrice: 101818.18, loanApprovalValue: 80000 },
    { carat: 13, goldPercentage: 59.09, todayMarketPrice: 94545.45, loanApprovalValue: 74000 },
    { carat: 12, goldPercentage: 54.55, todayMarketPrice: 87272.73, loanApprovalValue: 68000 }
  ]);

  const handleInputChange = (index, columnName, value) => {
    const updatedData = [...data];
    updatedData[index][columnName] = value;
    setData(updatedData);
  };

  const handleSave = (index) => {
    // Save the updated data to local storage
    localStorage.setItem('projectData', JSON.stringify(data));
    // Reload the page to reflect changes
    window.location.reload();
  };

  return (
    <div className="container">
      <h1 className="heading">Project Manager Page</h1>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Carat</th>
              <th>Gold Percentage</th>
              <th>Today Market Price</th>
              <th>Loan Approval Value</th>
              <th>Action</th> {/* New column for Save button */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.carat}</td>
                <td>{row.goldPercentage}</td>
                <td>
                  <input
                    type="text"
                    value={row.todayMarketPrice}
                    onChange={(e) => handleInputChange(index, 'todayMarketPrice', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.loanApprovalValue}
                    onChange={(e) => handleInputChange(index, 'loanApprovalValue', e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleSave(index)}>Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectManagerPage;
