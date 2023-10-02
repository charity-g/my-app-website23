import './Button.css';
import React from 'react';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    path,
    buttonStyle,
    buttonSize
  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize : SIZES[0];

    return (
        <a href={"my-app-website/"+{path}} className='btn-mobile'>
            <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}
              type={type}>
                {children}
            </button>
        </a>
    )
  }