import './Button.css';
import { Link } from 'react-router-dom';
import React from 'react';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    path,
    onClick,
    buttonStyle,
    buttonSize
  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize : SIZES[0];

    return (
      <Link to={path} className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
          >
          {children}
        </button>
      </Link>
    )
  }