import { Component } from 'react';

function Button({ text, url, color, height = 'full', width = 'full' }) {
    return (
        <a
            href={url}
            className={`rounded-full flex justify-end items-center text-black pr-3`}
            style={{ 
                backgroundColor: color,
                width: width === 'full' ? '100%' : `${width}`,
                height: height === 'full' ? '100%' : `${height}`,
            }}
        >
            <p>{text}</p>
        </a>
    );
}

export { Button };