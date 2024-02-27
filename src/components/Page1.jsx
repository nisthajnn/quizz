import React from 'react';
import But from './But';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Page1 = () => {
  return (
    <div style={styles.container}>
      <p className="text-[-200px] text-black" style={styles.heading}>
        Are you ready to test your knowledge?
      </p>
      <But />
     
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    border: '1px solid black',
    opacity: '0.9',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%', // Adjusted width to make it responsive
    maxWidth: '600px', // Added max-width for larger screens
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '220px',
  },
  heading: {
    fontSize: '30px',
  },
};

export default Page1;
