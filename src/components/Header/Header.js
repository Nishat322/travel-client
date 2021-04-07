import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() { 
        return (  
            <div className = 'Header'>
                <header>
                    <h2>Destinations</h2>
                    <p> Click on the Location Title to see Impressions</p>
                </header>
            </div>
        )
    }
}
 
export default Header;