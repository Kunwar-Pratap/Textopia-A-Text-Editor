"use client";

import React, { useContext, useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';
import { RxLetterCaseLowercase, RxSpaceBetweenHorizontally } from 'react-icons/rx';
import { TfiUppercase } from 'react-icons/tfi';
import { AlertContext } from '../../context/AlertContext';

const TextEditor = () => {
    const { showAlert } = useContext(AlertContext);


    const [text, setText] = useState('');

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setText(e.target.value)
    }

    const textToUppercase = () => {
        const updateText = text.toUpperCase();
        setText(updateText);
        showAlert("success", "text has been converted to uppercase");
    }

    const textToLowercase = () => {
        const updateText = text.toLowerCase();
        setText(updateText);
        showAlert("success", "text has been converted to lowercase");

    }

    const textCopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        document.getSelection()?.removeAllRanges();
        showAlert("success", "text has been copied to clipboard");

    }

    const textClear = () => {
        const updateText = '';
        setText(updateText);
        showAlert("oh no!", "text has been cleared");

    }

    const removeWhiteSpace = () => {
        const updateText = text.split(/[  ]+/);
        setText(updateText.join(" "));
        showAlert("success", "white-spaces has been removed");
    }

    return (
        <div >
            <textarea className='w-full h-96 border border-zinc-300 dark:border-stone-600 border-opacity-40 resize-none py-3 px-5 text-base text-neutral-600 tracking-wide leading-6 rounded-tl-md rounded-tr-md outline-none dark:bg-transparent dark:text-gray-200' placeholder='Enter text here' value={text} onChange={handleTextChange}></textarea>
            <div className='flex justify-around h-14  items-center -mt-2 bg-zinc-100 dark:bg-stone-600'>
                <span className="words capitalize text-neutral-700 dark:text-gray-200"><strong>{((text.split(/\s+/).filter((e) => { return e.length !== 0 }).length) > 1 ? "words : " : "word : ")}</strong> {text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} </span>
                <span className="characters capitalize text-neutral-700 dark:text-gray-200"><strong>{((text.replace(/\s/g, '')).length > 1 ? "characters : " : "character : ")}</strong> {(text.replace(/\s/g, '')).length}</span>
            </div>
            <div className="buttons flex gap-7 h-28 items-center justify-center bg-zinc-200 dark:bg-stone-700">
                <button disabled={text.length === 0} className='border-2 px-4 pt-1 pb-2 rounded-md border-gray-400 hover:bg-emerald-300 hover:border-emerald-400 dark:border-opacity-50 dark:hover:bg-violet-500 dark:hover:border-violet-600' title='Lowercase' onClick={textToLowercase}><RxLetterCaseLowercase className='text-4xl text-neutral-600 dark:text-gray-100' /></button>
                <button disabled={text.length === 0} className='border-2 px-4 pt-1 pb-2 rounded-md border-gray-400 hover:bg-emerald-300 hover:border-emerald-400 dark:border-opacity-50 dark:hover:bg-violet-500 dark:hover:border-violet-600' title='Uppercase' onClick={textToUppercase}><TfiUppercase className='text-4xl text-neutral-600 dark:text-gray-100' /></button>
                <button disabled={text.length === 0} className='border-2 px-4 pt-1 pb-2 rounded-md border-gray-400 hover:bg-emerald-300 hover:border-emerald-400 dark:border-opacity-50 dark:hover:bg-violet-500 dark:hover:border-violet-600' title='Copy To Clipboard' onClick={textCopyToClipboard}><FiCopy className='text-4xl text-neutral-600 dark:text-gray-100' /></button>
                <button disabled={text.length === 0} className='border-2 px-4 pt-1 pb-2 rounded-md border-gray-400 hover:bg-emerald-300 hover:border-emerald-400 dark:border-opacity-50 dark:hover:bg-violet-500 dark:hover:border-violet-600' title='Clear Text' onClick={textClear}><AiOutlineClear className='text-4xl text-neutral-600 dark:text-gray-100' /></button>
                <button disabled={text.length === 0} className='border-2 px-4 pt-1 pb-2 rounded-md border-gray-400 hover:bg-emerald-300 hover:border-emerald-400 dark:border-opacity-50 dark:hover:bg-violet-500 dark:hover:border-violet-600' title='Remove White-Spaces' onClick={removeWhiteSpace}><RxSpaceBetweenHorizontally className='text-4xl text-neutral-600 dark:text-gray-100' /></button>
            </div>
            <div className="mt-10">
                <h2 className='text-2xl font-medium mb-3 dark:text-gray-100'>Preview</h2>
                {text.length > 0 ? <p className='text-base text-neutral-600 px-3 leading-8 tracking-wide text-justify first-letter:text-2xl dark:text-gray-300'>{text}</p> : <p className='text-base text-red-500 dark:text-red-400 px-3 tracking-wide'>Enter something for preview</p>}
            </div>
        </div>
    )
}

export default TextEditor;