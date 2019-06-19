import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Container from '@material-ui/core/Container';
import uuid from 'uuid/v4'
import './Gallery.css'

const URL = 'https://source.unsplash.com/featured/?'

export class Gallery extends Component {
    constructor(props){
        super(props)
        this.randomCatGen = this.randomCatGen.bind(this)
        this.randomImgs = this.randomImgs.bind(this)
    }

    randomCatGen(){
        const randomCat = ['person','animals','objects']
        const newWord = Math.floor(Math.random() * randomCat.length)
        let word = randomCat[newWord]
        return {name:word, src:`${URL}${word}`}
    }
    randomImgs(){
        let generatedWord = this.randomCatGen()
        let i
        let arr = []
        for(i = 0;i < 3;i++){
            arr.push(generatedWord)
        }
        console.log(arr)
        return arr.map( image => <img src={image.src} key={uuid()} id={image.name} alt={image.name}/>)
    }
    render() {
        return (
        <div className="Gallery">
            <Navbar/>
                <Container fixed>
            <div className="Gallery-grid">
                {this.randomImgs()}
                {this.randomImgs()}
                {this.randomImgs()}
               </div>
            </Container>
            <Footer />
        </div>
        )
    }
}

export default Gallery
