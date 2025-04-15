import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <h3>Strona nieznaleziona</h3>
      <Link to="/">Strona główna</Link>
      <br />
    </>
  );
};

export default NotFound;
