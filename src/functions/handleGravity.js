/*
    Handle Gravity function
    Calculates new velocity vector by applaing gravity:
*/

const handleGravity = (element, timeDelta) => {
    return {
        x: element.physics.velocity.x,
        y: element.physics.velocity.y - (10 * timeDelta)
    }
}

export default handleGravity