import React from 'react'
import ReactDOM from 'react-dom'
import AddTravel from './AddTravel'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddTravel/>, div)
    ReactDOM.unmountComponentAtNode(div)
})