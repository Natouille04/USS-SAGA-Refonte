import { Component } from 'react';

function Button({ text, url, color }) {
    return (
        <a href={url} className="w-full h-full rounded-full flex justify-end items-end text-black" style={{ backgroundColor: color }}>
            <p className="mr-5 mb-2" >{text}</p>
        </a>
    );
}

export { Button };