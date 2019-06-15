import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        padding:'1%',
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
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/gallery">Gallery</NavLink>
                <NavLink exact to="/about">About</NavLink>
                <NavLink exact to="/contact">Contact</NavLink>
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)
