import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './navall/DisplayHome'
import Guardian from './navall/Guardian'
import Teacher from './navall/Teacher'
import Admin from './navall/Admin'
import Management from './navall/Management'
import Student from './navall/Student'
import Studentdashbord from './navall/Studentdashbord'
import Bca from './course/Bca'
import Mca from './course/Mca'
import Btech from './course/Btech'
import Mtech from './course/Mtech'
import Bba from './course/Bba'
import Mba from './course/Mba'
import Course from './course/Course'
import Search from './search/Search'
const Display = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<DisplayHome/>} />
        <Route path='/guardian' element={<Guardian/>} />
        <Route path='/teacher' element={<Teacher/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/management' element={<Management/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/studentdashbord' element={<Studentdashbord/>} />
        <Route path='/bca' element={<Bca/>} />
        <Route path='/mca' element={<Mca/>} />
        <Route path='/b.tech' element={<Btech/>} />
        <Route path='/m.tech' element={<Mtech/>} />
        <Route path='/bba' element={<Bba/>} />
        <Route path='/mba' element={<Mba/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default Display