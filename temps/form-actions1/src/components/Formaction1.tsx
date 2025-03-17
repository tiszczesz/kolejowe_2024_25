import React from "react";

const Formaction1 = () => {
  function handleSubmit(formData: FormData): void | Promise<void> {
    const data = {
      title: formData.get("title"),
      director: formData.get("director"),
      year: formData.get("year"),
      //correct: formData.get("correct"),
      correct: formData.get("correct") === "on",
      radio: formData.get("radio"),
      education: formData.get("education"),
    };
    console.log(data);
  }

  return (
    <form action={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="director">Director:</label>
        <input type="text" id="director" name="director" required />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" required />
      </div>
      <div>
        <label htmlFor="correct">IsCorrect:</label>
        <input type="checkbox" id="correct" name="correct" />
      </div>
      <div>
        <label htmlFor="radio">Radio1:</label>
        <input type="radio" id="radio" name="radio" value="radio1" />
        <br />
        <label htmlFor="radio">Radio2:</label>
        <input type="radio" id="radio" name="radio" value="radio2" />
        <br />
        <label htmlFor="radio">Radio3:</label>
        <input type="radio" id="radio" name="radio" value="radio3" />
        <br />
      </div>
      <div>
        <label htmlFor="education">Education:</label>
        <select id="education" name="education">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="tertiary">Tertiary</option>
        </select>
      </div>
      <button type="submit">Zatwierdzam</button>
    </form>
  );
};

export default Formaction1;
