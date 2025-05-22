import { Component } from 'react';

function Button({ text, url, color }) {
    return (
        <div className="w-full h-full rounded-full flex justify-end items-end" style={{ backgroundColor: color }}>
            <a className="mr-5 mb-2" href={url}>{text}</a>
        </div>
    );
}

export { Button };