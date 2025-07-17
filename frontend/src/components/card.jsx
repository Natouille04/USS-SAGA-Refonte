import React from 'react';

function Card({ title, image, id, index, height = '100%' }) {
    return (
        <a
            href={`/archive/${id}`}
            className="flex flex-col items-center justify-end w-full p-3"
            style={{
                height: height,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 0px -50px 40px -10px black'
            }}
            key={index}
        >
            <p>{title}</p>
        </a>
    );
}

export { Card };
