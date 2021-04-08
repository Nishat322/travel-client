import React, { Component } from 'react'
import config from '../../config'
import TravelContext from '../../context/TravelContext'
import Description from '../Description/Description'

import './Travel.css'

class Travel extends Component {
    static contextType = TravelContext

    state = {
        displayDescription: false
    }

    handleClickDelete = e => {
        e.preventDefault()
        const travelId = this.props.id

        fetch(`${config.API_ENDPOINT}/travel/${travelId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if(!res.ok){
                    throw new Error ('Delete Failed')
                }
            })
            .then(()=> {
                this.context.deleteDestination(travelId)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //controls whether the description will display or not
    displayDescription = () => {
        this.setState({
            displayDescription: !this.state.displayDescription
        })
    }

    //renders each individual location
    render() { 
        const {place, author, description, date_added} = this.props
        return ( 
                <div className = 'Travel'>
                        <button className = 'Travel_place' onClick = {this.displayDescription}>
                            <h2>
                                {`"${place}"`}
                            </h2>
                        </button>
                        {this.state.displayDescription? <Description description = {description}/> : ''}
                    <h4> Added by {author ? author :'anonmymous' }</h4>
                    <div className = 'Travel_footer'>
                        <span className = 'Travel_date-format'>
                            Date Added: {' '} {date_added}
                        </span>
                        <button className = 'Travel_button' type = 'button' onClick={this.handleClickDelete}>
                            Remove
                        </button>
                    </div>
                </div>
        )
    }
}
 
export default Travel