import React from 'react';


function Footer() {
  return (
    <footer style = {footerStyle}>
    ©Onnin Sääasema &nbsp;&nbsp;
    <a href="https://github.com/OnniBjorn/HyTeIoTOnni/blob/master/README.md">ReadMe</a>
    </footer>
    
  )
}

  const footerStyle = {
    background: '#333333',
    color: '#ffffff',
    textAlign: 'left',
    padding:'10px',
    width: '100%',
    position: 'fixed',
    bottom: '0px'
  }


  export default Footer;