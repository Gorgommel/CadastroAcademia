import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ label, icon, onClick }) => {
  return (
    <Button onClick={onClick}>
      {icon && <img src={icon} alt="icon" style={{ marginRight: '5px' }} />} {label}
    </Button>
  );
};

export default CustomButton;
