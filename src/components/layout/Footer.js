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
    position: 'absolute',
    bottom: '0px'
  }

  export default Footer;