import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CoursesList from './components/CoursesList'
import CourseForm from './components/CourseForm'
import UsersCourse from './components/UsersCourse'
import { courses,type User } from './data'
import { useState } from 'react'
function App() {
  const [usersList, setUsersList] = useState<User[]>([])

  function addUser(name: string, course: string): void {
    const newUser: User = {
      name,
      course
    }
    console.log(newUser);
    
    setUsersList((prev) => [...prev, newUser])
  }

  return (
    <div className='container'>
     <CoursesList listCourses={courses} />
     <CourseForm handleAddUser={addUser} courses={courses} />
     <UsersCourse users={usersList} />
    </div>
  )
}

export default App
