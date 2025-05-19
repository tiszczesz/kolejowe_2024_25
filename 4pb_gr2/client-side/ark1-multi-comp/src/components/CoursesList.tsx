type Props = {
  listCourses: string[];
};

const CoursesList = (props: Props) => {
  return (
    <>
    <h1>Lista kursów: {props.listCourses.length}</h1>
      <ol>
        {props.listCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ol>
    </>
  );
};

export default CoursesList;
