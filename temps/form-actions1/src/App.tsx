import "./App.css";

function App() {
  function handleSubmit(formData: FormData): void | Promise<void> {
    const data = {
      title: formData.get("title"),
      director: formData.get("director"),
      year: formData.get("year"),
      //correct: formData.get("correct"),
      correct: formData.get("correct") === "on"
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
      <button type="submit">Zatwierdzam</button>
    </form>
  );
}

export default App;
