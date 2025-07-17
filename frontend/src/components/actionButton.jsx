import React from 'react';

function ActionButton({ text, event, color }) {
    return (
        <button
            className="w-full h-full rounded-full flex justify-end items-center text-black pr-3"
            style={{ backgroundColor: color }}
            onClick={event}
        >
            <p>{text}</p>
        </button>
    );
}

export { ActionButton };