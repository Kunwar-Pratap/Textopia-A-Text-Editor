"use client"

import React, { useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';

type TProps = {
    type?: string;
    msg?: string;
}

const Alert: React.FC<TProps> = ({ type, msg }) => {

    const capitalize = (word: string) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    const { alert } = useContext(AlertContext);

    return (
        alert && <div className="h-12 px-3 text-base text-emerald-800 rounded-lg bg-emerald-200 dark:bg-violet-950 dark:text-violet-400 relative flex items-center" role="alert">
            <strong className="pr-2">{capitalize(alert.type)}&nbsp;:</strong> {capitalize(alert.msg)}
        </div>
    )
}

export default Alert;