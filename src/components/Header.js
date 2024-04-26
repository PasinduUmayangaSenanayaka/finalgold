import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const imgStyle = {
    width: '150px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <header style={headerStyle}>
      <img src="logo.png" alt="Logo" style={imgStyle} />
    </header>
  );
}

export default Header;
