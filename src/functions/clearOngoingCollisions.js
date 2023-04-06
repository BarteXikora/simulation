/*
    Clear Ongoing Collisions function
    Checks if each of collisions saved in ongoing collisions array still occur.
*/

const clearOngoingCollisions = (collisions) => {
    const newOngoing = []

    collisions.ongoing.forEach(coll => {
        if (collisions.lastFrame.map(c => c.uuid).includes(coll.uuid))
            newOngoing.push(coll)
    })

    return newOngoing
}

export default clearOngoingCollisions