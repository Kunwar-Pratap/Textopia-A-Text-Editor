import React from 'react';

type TProps = {
    mainHeading: string;
    children: React.ReactNode;
}

const Layout : React.FC<TProps> = ({ mainHeading, children }) => {
    return (
        <div className='mx-auto max-w-6xl min-h-screen py-20 px-5'>
            <h1 className='text-3xl text-center mb-8 text-neutral-800 dark:text-violet-500 tracking-wide font-semibold capitalize'>{mainHeading}</h1>
            {children}
        </div>
    )
}

export default Layout