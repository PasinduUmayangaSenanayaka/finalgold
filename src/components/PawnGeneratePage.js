import React, { useState, useEffect } from 'react';
import './pawnGenerateStyles.css'; // Import the CSS file

const PawnGeneratePage = () => {
  const [itemName, setItemName] = useState('');
  const [itemsQuantity, setItemsQuantity] = useState('');
  const [totalWeight, setTotalWeight] = useState('');
  const [netWeight, setNetWeight] = useState('');
  const [caratValue, setCaratValue] = useState('');
  const [poundAmount, setPoundAmount] = useState('');
  const [monetaryValue, setMonetaryValue] = useState('');

  useEffect(() => {
    calculateValues();
  }, [totalWeight, netWeight]);

  const calculateValues = () => {
    const totalWeightNum = parseFloat(totalWeight);
    const netWeightNum = parseFloat(netWeight);

    if (totalWeightNum && netWeightNum) {
      // Calculate carat value
      const caratPercentage = (netWeightNum / totalWeightNum) * 100;
      let carat = '';
      if (caratPercentage >= 100) {
        carat = '22 carats';
      } else if (caratPercentage >= 95.45) {
        carat = '21 carats';
      } else if (caratPercentage >= 90.91) {
        carat = '20 carats';
      } else if (caratPercentage >= 86.36) {
        carat = '19 carats';
      } else if (caratPercentage >= 81.82) {
        carat = '18 carats';
      } else if (caratPercentage >= 77.27) {
        carat = '17 carats';
      } else if (caratPercentage >= 72.73) {
        carat = '16 carats';
      } else if (caratPercentage >= 68.18) {
        carat = '15 carats';
      } else if (caratPercentage >= 63.64) {
        carat = '14 carats';
      } else if (caratPercentage >= 59.09) {
        carat = '13 carats';
      } else if (caratPercentage >= 54.55) {
        carat = '12 carats';
      }

      setCaratValue(carat);

      // Calculate pound amount
      const poundAmount = netWeightNum / 8;
      setPoundAmount(poundAmount);

      // Calculate monetary value based on carat
      let monetaryValue = 0;
      if (carat === '22 carats') {
        monetaryValue = poundAmount * 160000;
      } else if (carat === '21 carats') {
        monetaryValue = poundAmount * 152727.27;
      } else if (carat === '20 carats') {
        monetaryValue = poundAmount * 145454.55;
      } else if (carat === '19 carats') {
        monetaryValue = poundAmount * 138181.82;
      } else if (carat === '18 carats') {
        monetaryValue = poundAmount * 130909.09;
      } else if (carat === '17 carats') {
        monetaryValue = poundAmount * 123636.36;
      } else if (carat === '16 carats') {
        monetaryValue = poundAmount * 116363.64;
      } else if (carat === '15 carats') {
        monetaryValue = poundAmount * 109090.91;
      } else if (carat === '14 carats') {
        monetaryValue = poundAmount * 101818.18;
      } else if (carat === '13 carats') {
        monetaryValue = poundAmount * 94545.45;
      } else if (carat === '12 carats') {
        monetaryValue = poundAmount * 87272.73;
      }

      setMonetaryValue(monetaryValue);
    }
  };

  const handleNext = () => {
    // Navigate to the next page
    console.log('Navigating to next page');
  };

  return (
    <div className="container" style={{ backgroundColor: '#959191' }}>
      <h2>Item Name</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <h2>Item Quantity</h2>
      <input
        type="text"
        value={itemsQuantity}
        onChange={(e) => setItemsQuantity(e.target.value)}
      />
      <h2>Total Weight</h2>
      <input
        type="text"
        value={totalWeight}
        onChange={(e) => setTotalWeight(e.target.value)}
      />
      <h2>Net Weight</h2>
      <input
        type="text"
        value={netWeight}
        onChange={(e) => setNetWeight(e.target.value)}
      />
      <div>
        <p>Carat Value: {caratValue}</p>
        <p>Pound Amount: {poundAmount}</p>
        <p>Monetary Value: {monetaryValue}</p>
      </div>
      <button className="next-btn" onClick={handleNext}>Next</button>
    </div>
  );
}

export default PawnGeneratePage;
