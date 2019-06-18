import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div>
                <h1>Contact</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact
