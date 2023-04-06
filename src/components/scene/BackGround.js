/*
    BackGround Component
    Contains all static visual elements of the scene.
*/

import React from 'react'

import Grid from './BackGround/Grid'
import ViewFinder from './BackGround/ViewFinder'

const BackGround = () => {
    return (<>

        {/* Sets background color black: */}
        <color args={[0, 0, 0]} attach={'background'} />

        {/* A subtle grid. Size prop - number of lines. Space prop - spacing between lines: */}
        <Grid size={63} space={0.4} />

        {/* Light blue plus sign pointing at the center of the circle: */}
        <ViewFinder />
    </>)
}

export default BackGround