import React from 'react';


function Footer() {
  return (
    <footer style = {footerStyle}>
    ©Onnin Sääasema &nbsp;&nbsp;
    <div style = {divStyle}><a href="https://github.com/OnniBjorn/HyTeIoTOnni/blob/master/README.md">ReadMe</a></div>
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
  const divStyle = {
    textAlign: 'ríght',
    position:'fixed',
    bottom:'10px',
    right: '20px'
  }


  export default Footer;