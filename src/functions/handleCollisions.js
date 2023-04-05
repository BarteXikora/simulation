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
    // HERE!!!

    console.log(ballPosition, ballVelocity, colliderPosition, colliderVelocity)

    return { x: 0, y: 0 }
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

    return { x: 0, y: 0 }
}

export default handleCollisions