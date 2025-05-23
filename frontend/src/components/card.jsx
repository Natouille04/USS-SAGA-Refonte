import React from 'react';

function Card({ title, image, id, index }) {
    return (
        <a
            href={`/archive/${id}`}
            className="flex flex-col items-center justify-end w-full h-100 p-3"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 0px -50px 40px -10px black'
            }}
            key={index}
        >
            <p className="text-xl">{title}</p>
        </a>
    );
}

export { Card };
