import React from 'react'

const TravelContext = React.createContext({
    destinations: [],
    addDestination: () => {},
    deleteDestination: () => {}
})

export default TravelContext