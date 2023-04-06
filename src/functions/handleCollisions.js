/*
    Handle Collisions function
    Calculates new vector after collisions with collider
*/

// Calculates new vector after collision of 2 balls:
const calculateCollisionBallxBall = (element, collision) => {

    // Gets positions and velocities if both balls:
    const ballPosition = { x: element.position.x, y: element.position.y }
    const ballVelocity = { x: element.physics.velocity.x, y: element.physics.velocity.y }
    const colliderPosition = { x: collision.position.x, y: collision.position.y }
    const colliderVelocity = { x: collision.velocity.x, y: collision.velocity.y }

    // Calculates normal vector:
    const normalVector = { x: colliderPosition.x - ballPosition.x, y: colliderPosition.y - ballPosition.y }
    const normalLength = Math.sqrt(normalVector.x * normalVector.x + normalVector.y * normalVector.y)
    normalVector.x /= normalLength
    normalVector.y /= normalLength

    // Calculates perpendicular vector:
    const perpVector = {
        x: normalVector.x * (ballVelocity.x * normalVector.x + ballVelocity.y * normalVector.y),
        y: normalVector.y * (ballVelocity.x * normalVector.x + ballVelocity.y * normalVector.y),
    }

    // Calculates parallel vector:
    const parVector = { x: colliderVelocity.x - perpVector.x, y: colliderVelocity.y - perpVector.y }

    // Calculates and returns new ball vector:
    return { x: parVector.x - perpVector.x, y: parVector.y - perpVector.y }
}

// Main function, calculates all collisions using more specific functions and then calculates average vector:
const handleCollisions = (element, collisions) => {

    // All collisions vectors:
    let velocities = []

    // Loop for all current collisions:
    collisions.forEach(collision => {
        if (element.physics.type === 'ball') {
            if (collision.colliderType === 'ball')
                velocities.push(calculateCollisionBallxBall(element, collision))
        }
    })

    // Calculates average vector value:
    let avgVector = { x: 0, y: 0 }
    velocities.forEach(vel => {
        avgVector.x += vel.x
        avgVector.y += vel.y
    })
    avgVector.x /= (velocities.length !== 0 ? velocities.length : 1)
    avgVector.y /= (velocities.length !== 0 ? velocities.length : 1)

    return avgVector
}

export default handleCollisions