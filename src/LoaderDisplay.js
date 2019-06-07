import React from 'react'

class LoaderDisplay extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <div class="ui active dimmer">
          <div class="ui text loader">{this.props.message}</div>
        </div>
    );
  }
}

LoaderDisplay.defaultProps = {
  message: "Loading"
}

export default LoaderDisplay;