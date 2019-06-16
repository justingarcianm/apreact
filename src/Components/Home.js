import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {withStyles} from '@material-ui/styles'

const styles = {
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    image:{
        
    }
}

export class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <Navbar/>     
                <div className={classes.image}>
                <img src='https://source.unsplash.com/collection/art' alt="art"/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(Home)
