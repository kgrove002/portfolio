import React from 'react';

const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p> Kevin Grove All Right Reserved &copy; 2000 - {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
