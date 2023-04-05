/*
    Calculate Position function
    Returns new element position after adding velocity values
*/

const calculatePosition = (element) => {
    return {
        x: element.position.x + element.physics.velocity.x,
        y: element.position.y + element.physics.velocity.y
    }
}

export default calculatePosition