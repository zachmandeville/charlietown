import React from 'react'
import { connect as buildWifiContainer } from 'react-redux'

const App = ({theGoodBoy}) => {
  return (
    <div>
    <h1>Hello, world.  It is Charlietown</h1>
    <h2>This is who it is all about: {theGoodBoy}</h2>
    </div>
    )

}

var mapStateToProps = (state) => {
  return {
    theGoodBoy: state.theGoodBoy
    }
    }

var wifiContainer = buildWifiContainer(mapStateToProps)
var wifiComponent = wifiContainer(App)

export default wifiComponent


