import React from 'react';

const Footer = () => {
  return (
    <span style={styles.container}>
      <img src="./images/heart.png" width="30px" alt="" />
      <p style={styles.text}>Developed By Nistha</p>
    </span>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    marginLeft: '0px', // Adjust the margin as needed for spacing
    fontSize: '16px', // Adjust the font size as needed
  },
};

export default Footer;