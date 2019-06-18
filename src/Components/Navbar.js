import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        paddingTop:'20px',
        '& h1': {
            fontSize:'3em',
            letterSpacing:'.1em',
            fontWeight:'400'
        },
        '& span': {
            color:'darkred'
        }
    },
    navLinks: {
        padding:'2rem',
        '&  a': {
            textDecoration:"none",
            color:'#999',
            margin:'15px',
            transition:"all 400ms ease-in-out"
        },
        '& a:hover': {
            color:'#222'
        }
    }
}

export class Navbar extends Component {
    render() {
        const { classes } = this.props
        return (
            <header className={classes.root}>
                <h1><span>A</span>aron <span>A</span>rt</h1>
                <nav className={classes.navLinks}>
                <NavLink activeClassName="active-link" exact to="/">Home</NavLink>
                <NavLink activeClassName="active-link" exact to="/gallery">Gallery</NavLink>
                <NavLink activeClassName="active-link" exact to="/about">About</NavLink>
                <NavLink activeClassName="active-link" exact to="/contact">Contact</NavLink>
                </nav>
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)
