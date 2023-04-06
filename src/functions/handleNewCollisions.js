const handleNewCollisions = (collisions) => {
    let setCollisions = { ...collisions }
    let newCollisions = []

    collisions.lastFrame.forEach(coll => {
        if (!collisions.ongoing.map(c => c.uuid).includes(coll.uuid)) {
            setCollisions.ongoing.push(coll)
            newCollisions.push(coll)
        }
    })

    return [setCollisions, newCollisions]
}

export default handleNewCollisions