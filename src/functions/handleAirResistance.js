/*
    Handle Air Resistance function
    Calculates new velocity by adding air resistance.
*/

const handleAirResistance = (element, airResistance, maxSpeed, timeDelta) => {
    const newVector = {
        x: element.physics.velocity.x - (element.physics.velocity.x / airResistance * timeDelta),
        y: element.physics.velocity.y - (element.physics.velocity.y / airResistance * timeDelta),
    }

    if (Math.abs(newVector.x) > maxSpeed.x) {
        let tooFast = maxSpeed.x - Math.abs(newVector.x)

        newVector.x += (tooFast * Math.sign(newVector.x))
        newVector.y += (tooFast * Math.sign(newVector.y))

    } else if (Math.abs(newVector.y) > maxSpeed.y) {
        let tooFast = maxSpeed.y - Math.abs(newVector.y)

        newVector.x += (tooFast * Math.sign(newVector.x))
        newVector.y += (tooFast * Math.sign(newVector.y))
    }

    return newVector
}

export default handleAirResistance