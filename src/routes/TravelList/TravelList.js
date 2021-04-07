import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import ThoughtsContext from '../../context/TravelContext'
import Travel from '../../components/Thought/Travel' 
import Header from '../../components/Header/Header'
import './TravelList.css'

class TravelList extends Component {
    static defaultProps = {
        thoughts: []
    }

    static contextType = ThoughtsContext

    render() { 
        const {destinations} = this.context
        return (  
            <div className = 'TravelList'>
                <Header/>
                <div className = 'TravelList_headline'>
                    <button className = 'TravelList_button'><Link to = '/'> Back to Home Page </Link> </button>
                    <button className = 'TravelList_button'><Link to = '/add-destination'> Add Destination </Link> </button>
                    <span className = 'ThoughtList_total'>
                        Total Locations Listed: {destinations.length}
                    </span>
                </div>
                    <ul className = 'TravelList_grid container'>
                        {destinations.map(destination =>
                            <li key = {destination.id}>
                                <Travel
                                    id = {destination.id}
                                    place = {destination.place}
                                    author = {destination.author}
                                    description = {destination.description}
                                    date_added = {destination.date_added}
                                />
                                <br/>
                            </li>    
                        )}
                    </ul>
                </div>
        )
    }
}
 
export default TravelList