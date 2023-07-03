import React from 'react';

const Footer = () => {
    const getYear = new Date();
    const thisYear = getYear.getFullYear();

    return (
        <footer className='h-14 bg-zinc-600 md:flex-row flex-col flex justify-center items-center dark:bg-stone-950'>
            <span className='text-sm text-white order-2'>Copyrights &copy; {thisYear} | All rights reserved</span>
            <span className='text-sm text-white font-mono font-semibold md:px-3 order-1 mb-1 md:mb-0'>Textopia</span>
        </footer>
    )
}

export default Footer