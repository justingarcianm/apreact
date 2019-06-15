import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        paddingTop:'1%',
        '& a': {
            textDecoration:'none',
            color:"#222",
            margin:'0 10px',
            fontSize:'1.2em'
        },
        '& a:hover': {
            color:'red',
            textDecoration:'underline'
        }
    }
}

export class Navbar extends Component {
    render() {
        const { classes } = this.props
        return (
            <header className={classes.root}>
                <a href="#">Home</a>
                <a href="#">Gallery</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)
