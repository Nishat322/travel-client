import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './LandingPage.css'

class LandingPage extends Component {
    render() { 
        return (  
            <div className = 'LandingPage'>
                <h1>Destination Diary</h1>
                    <div className = 'LandingPage_body'>
                        <h3> This diary is a collection of places past users have travelled to and their impressions or thoughts on the location.</h3>
                        <h3> Use this application to determine your next vacation spot</h3>
                        <h3> When you click Enter, you will see an organized display of the various locations. Clicking on any of the location name will 
                            reveal the description of the location.
                        </h3>
                        <h3> Visitors are also able to delete any location they see by clicking the remove button.</h3>
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