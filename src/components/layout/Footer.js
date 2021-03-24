import React from 'react';


function Footer() {
  return (
    <footer style = {footerStyle}>
    ©Onnin Sääasema
    </footer>
  )
}

  const footerStyle = {
    background: '#333333',
    color: '#ffffff',
    textAlign: 'left',
    padding:'10px',
    width: '100%',
    
  }

  export default Footer;