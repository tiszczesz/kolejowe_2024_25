import type { User } from "../data";

type UsersProps = {
  users: User[];
};

const UsersCourse = ({ users }: UsersProps) => {
  return (
    <>
      <h3>Zapisane kursy:</h3>
      {users.length > 0 && (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Imię i nazwisko</th>
                <th>Kurs</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.course}</td>
                </tr>
                ))}
            </tbody>
        </table>
      )}
    </>
  );
};
export default UsersCourse;
