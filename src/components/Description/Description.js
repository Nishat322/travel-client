import React, { Component } from 'react'

class Description extends Component {
    render() { 
        return (  
            <div className = 'Description'>
                <h4> " {this.props.description} "</h4>
                <hr/>
            </div>
        )
    }
}
 
export default Description;