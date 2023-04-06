const clearOngoingCollisions = (collisions) => {
    const newOngoing = []

    collisions.ongoing.forEach(coll => {
        if (collisions.lastFrame.map(c => c.uuid).includes(coll.uuid))
            newOngoing.push(coll)
    })

    return newOngoing
}

export default clearOngoingCollisions