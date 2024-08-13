import React from 'react'
import Hero from './hero/Hero'
import Navbar from '../Navbar'
import Project from './category/Project'
import Exam from './category/Exam'
import Mentors from './category/Mentors'
import Advertisement from './category/Advertisement'

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Project/>
    <Exam/>
    <Advertisement/>
    <Mentors/>
    </>
  )
}

export default DisplayHome