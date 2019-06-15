import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {withStyles} from '@material-ui/styles'

const styles = {
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        height:'100vh',
        '& h1':{
            fontSize:'4em',
            letterSpacing:'.2em',
            margin:'auto',
            '& span':{
                color:'red'
            }
        }
    },
    image:{
        
    }
}

export class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <h1><span>A</span>aron <span>A</span>rt</h1>
                <Navbar/>     
                <img className={classes.image} src='https://source.unsplash.com/collection/art' alt="art"/>   
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(Home)
