import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import TravelContext from '../../context/TravelContext'
import TravelList from '../../routes/TravelList/TravelList'
import LandingPage from '../../routes/LandingPage/LandingPage'
import AddTravel from "../../routes/AddTravel/AddTravel"
import config from '../../config'
import './App.css'


class App extends Component {
    state = {
        destinations: [],
        error: null,
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/travel`)
            .then(res =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .then((destinations) => {
                this.setState({ destinations })
            })
            .catch(error => {
                console.error({error})
            })
    }

    addDestination = destination => {
        this.setState({
            destinations: [ ...this.state.destinations, destination]
        })
    }

    deleteDestination = destinationId => {
        this.setState({
            destinations: this.state.destinations.filter(destination => destination.id !== destinationId)
        })
    }

    render() { 
        const contextValue = {
            destinations: this.state.destinations,
            addDestination: this.addDestination,
            deleteDestination: this.deleteDestination
        }
        
        return (  
            <div className = "App">
                <TravelContext.Provider value = {contextValue}>
                    <Route 
                        exact path = '/'
                        component = {LandingPage}
                    />
                    <Route
                        path = '/destinations'
                        component = {TravelList}
                    />
                    <Route
                        path = '/add-destination'
                        component = {AddTravel}
                    />
                </TravelContext.Provider>
            </div>
        )
    }
}
 
export default App;