import React from 'react';

type TProps = {
    mainHeading: string;
    children: React.ReactNode;
}

const Layout : React.FC<TProps> = ({ mainHeading, children }) => {
    return (
        <div className='mx-auto max-w-6xl min-h-screen md:py-20 py-16 px-5'>
            <h1 className='lg:text-3xl md:text-2xl text-xl text-center mb-8 text-neutral-800 dark:text-violet-500 tracking-wide font-semibold capitalize'>{mainHeading}</h1>
            {children}
        </div>
    )
}

export default Layout