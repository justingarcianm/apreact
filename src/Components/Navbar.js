import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '& a': {
            textDecoration:'none',
            color:"#222"
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
