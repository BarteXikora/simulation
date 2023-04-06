/*
    Grid Component
    A subtle dark gray grid.
*/

import React, { useState, useEffect } from 'react'

import LineThin from './LineThin'

const Grid = ({ size, space }) => {
    // State contains an array of lines positions:
    const [lines, setLines] = useState([])

    // On first component render fills lines array with lines positions: 
    useEffect(() => {
        let lines = []

        for (let i = 0; i < size; i++) lines.push((i - (Math.floor(size / 2))) * space)

        setLines(lines)

    }, [])

    return <>
        {
            // Vertical lines:
            lines.map((line, n) => <LineThin
                key={n}
                rotationZ={0}
                positionX={line}
                positionY={0}
            />)
        }

        {
            // Horizontal lines:
            lines.map((line, n) => <LineThin
                key={n}
                rotationZ={Math.PI / 2}
                positionX={0}
                positionY={line}
            />)
        }
    </>
}

export default Grid