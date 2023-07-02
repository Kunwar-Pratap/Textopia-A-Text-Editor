import Layout from '@/components/Layout';
import Slider from '@/components/Slider';
import Link from 'next/link';
import React from 'react';
import { data } from './data';

export const metadata = {
    title: 'About - Textopia',
    description: 'A Text Editor',
}

const About = () => {
    return (
        <Layout mainHeading='About - textopia'>
            <Slider />
            <div className="mt-10" >
                <p className="text-base text-neutral-700 dark:text-gray-200 first-letter:text-3xl tracking-wide text-justify leading-7">&nbsp;&nbsp;&nbsp;&nbsp; In today&apos;s digital world, text editing has become an essential part of our lives. Whether you are a student, a professional writer, or simply someone who likes to write for pleasure, a text editor website can be an invaluable tool. In this blog, we will discuss the benefits of using a text editor website and how it can help you in your daily life.</p>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3 className="text-2xl text-neutral-800 mb-3 mt-4 tracking-wide font-medium dark:text-gray-100">{item.title}</h3>
                            <p className="text-base text-neutral-700 tracking-wide text-justify leading-7 dark:text-gray-200">{item.desc}</p>
                        </div>
                    )
                })}
                <p className="text-base text-neutral-700 dark:text-gray-100 tracking-wide text-justify mt-5 font-medium leading-7">In conclusion, using a text editor website can be a great way to write more efficiently and effectively. With its accessibility, features, collaboration tools, autosave feature, and backup and security measures, a text editor website can be a valuable tool for anyone who needs to write regularly.</p>
                <div className='flex flex-col items-center justify-center mt-12 border-2 border-gray-400 dark:border-violet-400 dark:border-opacity-50 w-fit mx-auto p-4 rounded-md border-opacity-40'>
                    <span className='text-neutral-700 tracking-wide text-base leading-8 dark:text-yellow-400'>This web app has been made with the help of React, Next.js, Typescript, Tailwind </span>
                    <span className='text-neutral-700 tracking-wide text-base leading-8 dark:text-yellow-400'>Thanks a lot of these precious Technologies - <Link href='https://github.com/Kunwar-Pratap' target='_blank' className='font-semibold dark:text-violet-400'>Kunwar Pratap (FULL STACK DEVELOPER)</Link></span>
                </div>
            </div>
        </Layout>
    )
}

export default About;