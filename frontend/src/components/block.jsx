import { Component } from 'react';

function Block({ width = "100%", height = "auto", color = "#FF9966", text = null, bottom = true, rounded = false, roundedDirection = 'bl' }) {
    const borderRadiusMap = {
        tl: '50px 0 0 0',
        tr: '0 50px 0 0',
        bl: '0 0 0 50px',
        br: '0 0 50px 0',
    };

    const style = {
        backgroundColor: color,
        width: width || '100px',
        height: height || '100px',
        marginBottom: bottom ? '7px' : '0px',
        borderRadius: rounded ? (borderRadiusMap[roundedDirection] || '0px') : '0px',
        boxSizing: 'border-box',
        maxWidth: '100vw',
        overflow: 'hidden',
        wordWrap: 'break-word',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
    };

    return (
        <div style={style}>
            <p>{text}</p>
        </div>
    );
}


export { Block };