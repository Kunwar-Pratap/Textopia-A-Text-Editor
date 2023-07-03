"use client";

import React from 'react';

type Props = {
    className: string;
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
    const getButton = () => {
        return (
            <button
                onClick={onClick}
                className={`${className}`}
            >{children}</button>
        )
    }
    return (
        <div>{getButton()}</div>
    )
}

export default Button; 