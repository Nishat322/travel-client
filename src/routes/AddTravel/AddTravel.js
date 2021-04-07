import React, { Component } from 'react'
import TravelContext from '../../context/TravelContext'
import TravelPic from './travelPic.jpg'

import config from '../../config'
import './AddTravel.css'

class AddTravel extends Component {
    static contextType = TravelContext

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    state = {
        error: null
    }

    handleSubmit = e => {
        e.preventDefault()
        const newTravel = {
            place: e.target['place'].value,
            description: e.target['description'].value,
            author: e.target['author'].value
        }
        fetch(`${config.API_ENDPOINT}/travel`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTravel),
        })
            .then(res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(destination => {
                this.context.addDestination(destination)
                this.props.history.push('/destinations')
            })
            .catch(error => {
                this.setState({error})
            })
    }

    handleClickCancel = () => {
        this.props.history.push('/destinations')
    }

    render() { 
        return (  
            <div className = 'AddTravel'>
                <h2> Where have you been? </h2>
                <div className = 'AddTravel_flex'>
                    <form className = 'AddTravel_form' onSubmit = {this.handleSubmit}>
                        <div>
                            <label htmlFor = 'place'>
                                Location Name {' '}
                            </label>
                            <input
                                type = 'textarea'
                                name = 'place'
                                id = 'place-input'
                                placeholder = 'ex: New York City'
                                required
                            />
                            <label htmlFor = 'description'>
                                Description: {' '}
                            </label>
                            <input
                                type = 'text'
                                name = 'description'
                                id = 'description-input'
                                placeholder = 'Impressions?'
                                required
                            />
                            <label htmlFor = 'author'>
                                Author {' '}
                            </label>
                            <input
                                type = 'text'
                                name = 'author'
                                id = 'author-input'
                                placeholder = 'Who Are You?'
                            />
                        </div>
                        <div className='AddTravel_buttons'>
                                <button type='button' onClick={this.handleClickCancel}>
                                    Cancel
                                </button>
                                {' '}
                                <button type='submit'>
                                    Save
                                </button>
                        </div>
                    </form>
                    <div className = 'AddTravel_image'>
                        <img className = 'AddTravel_images' src = {TravelPic} alt= 'Travel Pic'/>
                    </div> 
                </div>
            </div>
        )
    }
}
 
export default AddTravel;