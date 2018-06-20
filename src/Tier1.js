import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  clickHandler = event => {
    event.preventDefault();

    const newColor = getRandomColor();

    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor),
    })
  }

  clickHandlerChild(event) {
    event.stopPropagation();

    const newChildColor = getRandomColor();

    this.setState({
      childColor: newChildColor
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={(e) => {this.clickHandler(e)}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 clickHandler={(e) => {this.clickHandlerChild(e)}} color={this.state.childColor} />
        <Tier2 clickHandler={(e) => {this.clickHandlerChild(e)}} color={this.state.childColor} />
      </div>
    )
  }
}
