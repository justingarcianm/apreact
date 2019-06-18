import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div>
                <h1>About</h1>
                </div>
            <Footer />
            </div>
        )
    }
}

export default About
