/*
    Find Collision function
    Finds all current collisions and return info objects about them as an array.
*/

// Checks if there is collision with 2 balls:
const findCollisionsBallXBall = (element, collider) => {
    // Gets position:
    const [xB, yB, xC, yC] = [element.position.x, element.position.y, collider.position.x, collider.position.y]

    // Get radiusses:
    const [radB, radC] = [element.physics.radius, collider.physics.radius]

    // Calculates distance between centers of balls:
    const xDiff = xC - xB
    const yDiff = yC - yB
    const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff)

    // Returns collision info object if distance between centers are smaller than sum of balls radiuses:
    if (distance <= radB + radC) return {
        colliderType: 'ball',
        position: { x: collider.position.x, y: collider.position.y },
        velocity: { x: collider.physics.velocity.x, y: collider.physics.velocity.y },
        intersection: (radB + radC) !== 0 ? (radB + radC - distance) / (radB + radC) : 1,
        mass: collider.physics.mass
    }

    // If there is no collision returns false:
    return false
}

// Checks if there is collision with a ball and a ring:
const findCollisionsBallXRing = (element, collider) => {
    // Gets positions:
    const [xB, yB, xR, yR] = [element.position.x, element.position.y, collider.position.x, collider.position.y]

    // Get radiusses:
    const [radB, radR] = [element.physics.radius, collider.physics.radius]

    // Calculates distance between balls center and rings center:
    const xDiff = xR - xB
    const yDiff = yR - yB
    const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff)

    // Returns collision info object:
    if (distance >= radR - radB) return {
        uuid: collider.uuid,
        colliderType: 'ring',
        intersection: (distance - radB) - radR
    }

    return false
}

// Finds collisions for a ball type:
const findCollisionsAsABall = (element, colliders) => {

    // Array for found collisions:
    let collisions = []

    // Filters collider list to remove element itself from array and loops for all filtered colliders:
    colliders
        .filter(collider => collider.uuid !== element.uuid)
        .forEach(collider => {

            // Handles ball x ball collision:
            if (collider.physics.type === 'ball') {
                const found = findCollisionsBallXBall(element, collider)

                if (found) collisions.push(found)
            }

            // Handles ball x ring collision:
            else if (collider.physics.type === 'ring') {
                const found = findCollisionsBallXRing(element, collider)

                if (found) collisions.push(found)
            }
        })

    return collisions
}

// Main function, decides whitch specify function use to find collisions:
const findCollisions = (element, colliders) => {
    if (element.physics.type === 'ball') return findCollisionsAsABall(element, colliders)
}

export default findCollisions