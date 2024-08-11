import React from 'react'
import Hero from './hero/Hero'
import Navbar from '../Navbar'
import Project from './category/Project'
import Exam from './category/Exam'
import Mentors from './category/Mentors'

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Project/>
    <Exam/>
    <Mentors/>
    </>
  )
}

export default DisplayHome