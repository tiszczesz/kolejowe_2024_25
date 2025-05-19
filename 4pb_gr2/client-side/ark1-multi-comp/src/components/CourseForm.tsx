import { useState, type FormEvent } from "react";
import { courses } from "../data";

type Props = {
  handleAddUser: (name: string, course: string) => void;
  courses: string[];
};

const CourseForm = (props: Props) => {
  const [user, setUser] = useState("");
  const [course, setCourse] = useState(1);
  function handleCourse(value: string): void {
    const courseNumber = parseInt(value);
    if (courseNumber >= 1 && courseNumber <= props.courses.length) {
      setCourse(courseNumber);
    } else {
        setCourse(1); 
    }
  }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        props.handleAddUser(user, props.courses[course - 1]);
        setUser("");
        setCourse(1);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group m-2">
        <label htmlFor="user">Imię i nazwisko:</label>
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          className="form-control"
          id="user"
        />
      </div>
      <div className="form-group m-2">
        <label htmlFor="course">Numer kursu:</label>
        <input
          type="number"
          min={1}
          max={courses.length}
          onChange={(e) => handleCourse(e.target.value)}
          value={course}
          className="form-control"
          id="course"
        />
      </div>
      <button className="btn btn-primary m-2">Zapisz do kursu</button>
    </form>
  );
};

export default CourseForm;
