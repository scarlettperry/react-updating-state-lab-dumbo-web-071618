// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    console.log("init", this.state);
  }

  handleBitrateButton = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    })
  }

  handleResolutionButton = () => {
    this.setState({
      video: {
        ...this.state.settings.video,
        resolution: "720p",
      },
    })
  }

  render() {
    console.log("render", this.state)
    return(
      <div>
        <button
          onClick={this.handleBitrateButton}
          className="bitrate">
            Change Bitrate
        </button>
        <button
          onClick={this.handleResolutionButton}
          className="bitrate">
            Change Resolution
        </button>
      </div>
    )
  }


}

export default YouTubeDebugger
