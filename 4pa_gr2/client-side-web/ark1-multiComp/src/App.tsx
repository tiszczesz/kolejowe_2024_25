import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListCourses from "./components/ListCourses";
import FormCourse from "./components/FormCourse";
import TableCourse from "./components/TableCourse";
import type { User } from "./tools";
import { useState } from "react";

const courses = [
   "Programowanie w C#", "Angulardla początkujących", 
   "Kurs Django",
    "Kurs React", "Kurs JavaScript",
]


function App() {
  const [users, setUsers] =useState<User[]>([]);
  function addUser(user: User): void {
    if(user.userName.trim().length>0 && 
    user.courseNumber > 0
    && user.courseNumber <= courses.length) {
    setUsers((prev) => [...prev, user]);
    console.log(user);
    }
  }

  return (
    <div className="container">
      <ListCourses list={courses} />
      <FormCourse handleAdd={addUser} />
      <TableCourse listUsers={users} />
    </div>
  );
}

export default App;
