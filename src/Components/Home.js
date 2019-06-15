import React, { Component } from 'react'
import Navbar from './Navbar'
import {withStyles} from '@material-ui/styles'

const styles = {
    root:{
        '& h1':{
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
            </div>
        )
    }
}

export default withStyles(styles)(Home)
