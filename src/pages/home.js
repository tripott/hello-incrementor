import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'

const Home = props => {
  return (
    <div className="bg-black-10">
      <Header />
      <Nav />
      <Title>Home</Title>
      <Footer />
    </div>
  )
}

export default Home
