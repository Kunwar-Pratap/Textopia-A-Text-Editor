import React from 'react';

const Footer = () => {
    const getYear = new Date();
    const thisYear = getYear.getFullYear();

    return (
        <footer className='h-14 bg-zinc-600 flex justify-center items-center dark:bg-stone-950'>
            <span className='text-sm text-white'>Copyrights &copy; {thisYear} | <span className='font-mono font-semibold px-3'>Textopia</span> | All rights reserved</span>
        </footer>
    )
}

export default Footer