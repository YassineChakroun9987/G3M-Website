import React from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'

export default function LottieTest() {
  return (
    <div
      style={{
        width: '600px',
        height: '600px',
        margin: '100px auto',
        border: '2px solid red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <DotLottiePlayer
        src="/Marketing analytics.lottie"
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
