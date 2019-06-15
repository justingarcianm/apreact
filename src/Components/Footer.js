import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        padding:'1%',
        '& a': {
            textDecoration:'none',
            color:"#222",
            margin:'0 40px',
            fontSize:'1.2em'
        },
        '& a:hover': {
            color:'red',
            textDecoration:'underline'
        }
    },
    copy: {
        padding:'2%',
        display:'flex',
        justifyContent:'center',
        fontWeight:'bold'
     }
}

export class Footer extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.links}>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-etsy"></i></a>
                <a href="#"><i class="fas fa-paint-brush"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
                </div>
                <div className={classes.copy}>
                    <p>© 2018 Aaron Garcia</p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Footer)
