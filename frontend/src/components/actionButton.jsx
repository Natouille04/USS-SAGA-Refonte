import React from 'react';

function ActionButton({ text, event, color }) {
    return (
        <button
            className="w-full h-full rounded-full flex justify-end items-end text-black"
            style={{ backgroundColor: color }}
            onClick={event}
        >
            <p className="mr-5 mb-2">{text}</p>
        </button>
    );
}

export { ActionButton };