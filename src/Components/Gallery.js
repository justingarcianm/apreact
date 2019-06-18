import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Container from '@material-ui/core/Container';
import './Gallery.css'

// const url = `https://source.unsplash.com/featured/?${random}`

const imgArray  = [
    {name: "art", src:"https://source.unsplash.com/featured/?art"},
    {name: "person", src:"https://source.unsplash.com/featured/?person"},
    {name: "animals", src:"https://source.unsplash.com/featured/?animals"},
    {name: "nature", src:"https://source.unsplash.com/featured/?nature"},
    {name: "colors", src:"https://source.unsplash.com/featured/?colors"},
    {name: "objects", src:"https://source.unsplash.com/featured/?objects"},
    {name: "paint", src:"https://source.unsplash.com/featured/?paint"},
]



export class Gallery extends Component {
    
    render() {
        const imgGen = imgArray.map( image => 
        <img src={image.src} alt={image.name} key={image.name}/>)
        return (
        <div>
            <Navbar/>
                <Container fixed>
            <div className="Gallery-grid">
                {imgGen}
               </div>
            </Container>
            <Footer />
        </div>
        )
    }
}

export default Gallery
