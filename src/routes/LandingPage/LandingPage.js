import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './LandingPage.css'

class LandingPage extends Component {
    render() { 
        return (  
            <div className = 'LandingPage'>
                <h1>Destination Diary</h1>
                    <div className = 'LandingPage_body'>
                        <h3> This application allows you to see where people have traveled to and their impressions of the location.</h3>
                        <h3> When you click Enter, you will see an organized display of various locations that previous visitors have listed. 
                             Clicking on any of the destinations will reveal an impression or thoughts of the original poster.
                        </h3>
                        <h3> Although not recommended, you are able to delete any of the places you see listed.</h3>
                        <h3> Enjoy using this application. Hope you find a place you would like to visit </h3>
                        <div className = 'LandingPage_enter'>
                            <h2><Link to = '/destinations'> Click Here to Enter Diary </Link> </h2>
                        </div>
                    </div>
            </div>
        )
    }
}
 
export default LandingPage