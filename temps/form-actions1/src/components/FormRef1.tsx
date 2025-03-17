import { FormEvent, useRef } from 'react'



function FormRef1() {
    const titleRef = useRef<HTMLInputElement>(null);
    const directorRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if(titleRef.current && directorRef.current && yearRef.current){
            const data = {
                title: titleRef.current.value,
                director: directorRef.current.value,
                year: yearRef.current.value
            }
            console.log(data);
        }

        // console.log(e);
        
    }

  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input ref={titleRef} type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="director">Director:</label>
        <input ref={directorRef} type="text" id="director" name="director" required />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input ref={yearRef} type="number" id="year" name="year" required />
      </div>
      <button type="submit">Zatwierdzam</button>
      </form>
    </>
  )
}

export default FormRef1