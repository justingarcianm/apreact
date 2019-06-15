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
        '& h1':{
            paddingTop:'5%',
            fontSize:'4em',
            letterSpacing:'.2em',
            margin:'auto',
            '& span':{
                color:'red'
            }
        }
    }
}

export class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <h1><span>A</span>aron <span>A</span>rt</h1>
                <Navbar/>     
                <h3>Slideshow here</h3>   
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(Home)
