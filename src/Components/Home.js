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
        height:'100vh'
    },
    image:{
        borderTop: "solid 1px black",
        paddingTop:'15px',
        '& img': {
            height:'65vh',
            maxWidth:'100%'
        }
    }
}

export class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <Navbar/>     
                <div className={classes.image}>
                <img src='https://source.unsplash.com/featured/?red' alt="red"/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(Home)
