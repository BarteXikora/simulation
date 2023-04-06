/*
    Handle New Collisions function
    Returns 2 arrays: 
        1. setCollisions with collisions object ready to save with lastFrame and ongoing
        collisions,
        
        2. newCollisions with collisions that happend in last frame.
*/

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