import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import TravelList from './TravelList'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><TravelList/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})