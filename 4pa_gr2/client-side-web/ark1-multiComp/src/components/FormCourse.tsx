import React, { type FormEvent } from 'react'
import type { User } from '../tools'

type Props = {
    handleAdd: (user: User) => void
}

const FormCourse = (props: Props) => {
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const userName = formData.get("userName") as string;
        const courseInfo = formData.get("courseInfo") as string;
        //walidacja TODO
        const newUser:User = {
            userName: userName,
            courseNumber: parseInt(courseInfo)
        }
        props.handleAdd(newUser);
        form.reset();
    }

  return (
        <form onSubmit={handleSubmit} >
        <div className="form-group m-2">
          <label htmlFor="">Imię i nazwisko:</label>
          <input name="userName"  type="text" className="form-control" />
        </div>
        <div className="form-group m-2">
          <label htmlFor="">Numer kursu:</label>
          <input name="courseInfo" type="text" className="form-control" />
        </div>
        <button className='btn btn-primary m-2' >Zapisz do kursu</button>
      </form>
  )
}

export default FormCourse