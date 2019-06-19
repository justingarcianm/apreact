import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        padding:'1%',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        marginTop:'auto',
        '& a': {
            textDecoration:'none',
            color:"#222",
            margin:'0 40px',
            fontSize:'1.2em',
            transition:'all ease-in-out 400ms'
        },
        '& a:hover': {
            color:'darkred',
            textDecoration:'underline'
        }
    },
    copy: {
        paddingTop:'20px',
        fontWeight:'lighter',
        letterSpacing:'.5em'
     }
}

export class Footer extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.links}>
                <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="esty.com"><i className="fab fa-etsy"></i></a>
                <a href="dailypaintworks"><i className="fas fa-paint-brush"></i></a>
                <a href="gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
                <div className={classes.copy}>
                    <p>© 2018 Aaron Garcia</p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Footer)
