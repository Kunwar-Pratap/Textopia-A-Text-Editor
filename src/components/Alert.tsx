"use client"

import React, { useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';

type TProps = {
    type?: string;
    msg?: string;
}

const Alert: React.FC<TProps> = ({ type, msg }) => {

    const { alert } = useContext(AlertContext);

    return (
        alert && <div className="h-12 px-3 text-base text-emerald-800 rounded-lg bg-emerald-200 dark:bg-violet-950 dark:text-violet-400 relative flex items-center" role="alert">
            <strong className="pr-2">{alert.type}&nbsp;:</strong> {alert.msg}
        </div>
    )
}

export default Alert;