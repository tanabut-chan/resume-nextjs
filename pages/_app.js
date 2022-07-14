import React, { useState, useEffect, useRef } from "react";
import { Global } from '@emotion/react'
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js'
import "@fontsource/kanit";
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const fonts = {
  heading: `'Kanit', sans-serif`,
  body: `'Kanit', sans-serif`,
}
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }

  render() {
    return <div className="App">
      <header className="App-header" ref={this.vantaRef}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  }
}

const theme = extendTheme({ colors, fonts })

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  useEffect(() =>{
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id", "threeScript")
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
  } )
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;