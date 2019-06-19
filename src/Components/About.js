import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './About.css'

export class About extends Component {
    render() {
        return (
            <section>
                <Navbar/>
        <div className="About">
                <h1>About Aaron</h1>
            <div className="About-grid">
                <div>
                    section1
                </div>
                <div>
                    section2
                </div>
            </div>
                </div>
            <Footer />
            </section>
        )
    }
}

export default About
