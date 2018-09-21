// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
    {/*console.log("init", this.state)*/}
  }

  handleTimesClicked = () => {
    this.setState((prevState)=>{
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render() {
    {/*console.log("render", this.state)*/}
    return(
      <button onClick={this.handleTimesClicked}>Times clicked: {this.state.timesClicked}</button>
    )
  }


}

export default DigitalClicker
