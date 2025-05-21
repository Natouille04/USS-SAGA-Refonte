import { useState } from 'react'

function Block({ color }) {
    return (
        <div style={{ backgroundColor: color }} className={'h-16 w-16'}></div>
    )
}

export { Block }