const handleAirResistance = (element, airResistance, timeDelta) => {
    return {
        x: element.physics.velocity.x - (element.physics.velocity.x / airResistance * timeDelta),
        y: element.physics.velocity.y - (element.physics.velocity.y / airResistance * timeDelta),
    }
}

export default handleAirResistance