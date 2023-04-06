/*
    ViewFinder Component
    Light blue plus sign pointing at the center of the circle.
*/

import React from 'react'

import LineThick from './LineThick'

const ViewFinder = () => {
    return <>
        <LineThick rotationZ={0} />

        <LineThick rotationZ={Math.PI / 2} />
    </>
}

export default ViewFinder