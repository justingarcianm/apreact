import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {

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
