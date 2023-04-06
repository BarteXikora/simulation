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
    normalVector.x /= (normalLength !== 0 ? normalLength : 1)
    normalVector.y /= (normalLength !== 0 ? normalLength : 1)

    // Calculates perpendicular vector (includes balls intersection):
    const perpVector = {
        x: normalVector.x * (ballVelocity.x * normalVector.x + ballVelocity.y * normalVector.y + collision.intersection / 100),
        y: normalVector.y * (ballVelocity.x * normalVector.x + ballVelocity.y * normalVector.y + collision.intersection / 100),
    }

    // If balls are in exact positions and do not move, it applies random movements to them:
    if (collision.intersection > 0 && perpVector.x === 0 && perpVector.y === 0) {
        perpVector.x += (Math.floor(Math.random() * 10) - 5) / 1000
        perpVector.y += (Math.floor(Math.random() * 10) - 5) / 1000
    }

    // Calculates parallel vector:
    const parVector = {
        x: ballVelocity.x - perpVector.x,
        y: ballVelocity.y - perpVector.y
    }

    // Calculates and returns new ball vector:
    return { x: parVector.x - perpVector.x, y: parVector.y - perpVector.y }
}

// Calculates new vector after collision of a ball with a rings wall:
const calculateCollisionBallxRing = (element) => {
    return { x: -element.physics.velocity.x, y: -element.physics.velocity.y }
}

// Main function, calculates all collisions using more specific functions and then calculates average vector:
const handleCollisions = (element, collisions) => {

    // Saves chosen collision object
    let selectedCollision = null

    // Sets chosen collision to collision with ring if there is any and if not, then sets firs collision available:
    collisions.forEach(collision => { if (collision.colliderType === 'ring') selectedCollision = collision })
    if (selectedCollision === null) selectedCollision = collisions[0]

    // Selects proper collision function and returns velocity:
    if (element.physics.type === 'ball') {
        if (selectedCollision.colliderType === 'ball')
            return calculateCollisionBallxBall(element, selectedCollision)

        else if (selectedCollision.colliderType === 'ring')
            return calculateCollisionBallxRing(element)
    }
}

export default handleCollisions