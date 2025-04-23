import React from 'react'
import Category from './components/category/Category'
import Reviws from './components/reviews/Reviws'
import Section from './components/section/Section'
import Box from './components/box/Box'
import Featured from './components/featured/Featured'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
import ContactUs from './components/contact/Contact'





const Home = () => {
  return (
    <div>
       <Section/>
       <Box/>
       <Featured/>
        <Category/>
        <Blog/>
        <Reviws/>
        <ContactUs/>
         <Footer/>
      
       
      
       
    </div>
  )
}

export default Home