import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class time extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clock:''
        }
        console.log('this.props.date:', this.props.date)
    }

    componentDidMount(){
        setInterval(
            ()=>{
                console.log('this.state.clock:', this.state.clock)
                this.setState({
                    clock:this.props.date.toLocaleTimeString()
                })
                console.log('this.state.clock:', this.state.clock)
            }
            ,1000
        );
    }

    render() {
        console.log('this.props.date2:', this.props.date)
        return (
            <div>
                <h1>现在的时间是1{this.props.date.toLocaleTimeString()}</h1>
                <h1>现在的时间是2{this.state.clock}</h1>
            </div>
        )
    }
}

export default time
