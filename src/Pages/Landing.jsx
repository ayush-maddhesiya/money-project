import React from 'react'
import Hero from '../components/Hero'
import Iframe from '../components/Iframe'
import ContectUs from '../components/ContectUs'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'

export default function Landing() {
  return (
    <div>
      <Hero />
      <Products />
      <Iframe />
      <AboutUs />
      <ContectUs />
    </div>
  )
}
