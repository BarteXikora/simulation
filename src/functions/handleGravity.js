/*
    Handle Gravity function
    Calculates new velocity vector by applaing gravity:
*/

const handleGravity = (element, gravity, timeDelta) => {
    return {
        x: element.physics.velocity.x + (gravity.x * timeDelta / 10),
        y: element.physics.velocity.y + (gravity.y * timeDelta / 10)
    }
}

export default handleGravity